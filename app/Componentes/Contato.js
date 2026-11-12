"use client";

import { useState } from "react";
import { salvarMensagem } from "../../lib/mensagens";
import styles from "./Contato.module.css";

// Formulário controlado: cada campo tem o seu estado
export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [aviso, setAviso] = useState(null);
  const [enviando, setEnviando] = useState(false);

  async function enviar(e) {
    e.preventDefault();
    setAviso(null);

    if (nome.trim().length < 3) {
      setAviso({ tipo: "erro", texto: "Digite seu nome completo." });
      return;
    }
    if (!email.includes("@")) {
      setAviso({ tipo: "erro", texto: "Digite um e-mail válido." });
      return;
    }
    if (mensagem.trim().length < 5) {
      setAviso({ tipo: "erro", texto: "Escreva uma mensagem um pouco maior." });
      return;
    }

    const dados = { nome: nome.trim(), email: email.trim(), mensagem: mensagem.trim() };

    try {
      setEnviando(true);

      // 1) Envia para a nossa API, que valida de novo no servidor
      const resposta = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (!resposta.ok) {
        const corpo = await resposta.json().catch(() => null);
        setAviso({ tipo: "erro", texto: corpo?.erro ?? "Não foi possível enviar." });
        return;
      }

      // 2) Guarda a mensagem no Firebase
      await salvarMensagem(dados);

      setAviso({ tipo: "ok", texto: `Obrigada, ${dados.nome}! Recebi sua mensagem.` });
      setNome("");
      setEmail("");
      setMensagem("");
    } catch {
      setAviso({ tipo: "erro", texto: "Algo deu errado. Tente de novo em instantes." });
    } finally {
      setEnviando(false);
    }
  }

  return (
    <form onSubmit={enviar} className={styles.form} noValidate>
      <label className={styles.grupo}>
        Nome
        <input
          className="campo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          maxLength={100}
          autoComplete="name"
        />
      </label>

      <label className={styles.grupo}>
        E-mail
        <input
          className="campo"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={200}
          autoComplete="email"
        />
      </label>

      <label className={styles.grupo}>
        Mensagem
        <textarea
          className="campo"
          rows={5}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          maxLength={1000}
        />
      </label>

      <button type="submit" className="pilula pilula-cheia" disabled={enviando}>
        {enviando ? "Enviando..." : "Enviar mensagem"}
      </button>

      <div aria-live="polite">
        {aviso && (
          <p className={aviso.tipo === "ok" ? styles.ok : styles.erro}>{aviso.texto}</p>
        )}
      </div>
    </form>
  );
}
