"use client";

import { useState } from "react";
import styles from "./BuscaCep.module.css";

export default function BuscaCep() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function buscarCep(e) {
    // Não deixa o formulário recarregar a página
    e.preventDefault();

    // Fica só com os números
    const cepLimpo = cep.replace(/\D/g, "");

    setEndereco(null);
    setMensagem("");

    if (cepLimpo.length !== 8) {
      setMensagem("CEP inválido! Digite 8 números.");
      return;
    }

    try {
      setCarregando(true);

      const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);

      if (!resposta.ok) {
        throw new Error("Falha na consulta");
      }

      const dados = await resposta.json();

      // A ViaCEP responde 200 mesmo quando o CEP não existe,
      // por isso olhamos o dados.erro
      if (dados.erro) {
        setMensagem("CEP não encontrado!");
        return;
      }

      setEndereco(dados);
    } catch {
      setMensagem("Erro ao consultar o CEP.");
    } finally {
      // Roda sempre, deu certo ou não
      setCarregando(false);
    }
  }

  return (
    <section className={styles.caixa}>
      <p className={styles.ajuda}>Digite um CEP e veja o endereço, direto da API ViaCEP.</p>

      <form onSubmit={buscarCep} className={styles.form}>
        <input
          type="text"
          inputMode="numeric"
          className="campo"
          placeholder="Digite seu CEP"
          aria-label="CEP"
          value={cep}
          maxLength={8}
          onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
        />

        <button type="submit" className="pilula pilula-cheia" disabled={carregando}>
          {carregando ? "Consultando..." : "Buscar"}
        </button>
      </form>

      <div aria-live="polite">
        {mensagem && <p className={styles.erro}>{mensagem}</p>}

        {endereco && (
          <dl className={styles.resultado}>
            <div>
              <dt>CEP</dt>
              <dd>{endereco.cep}</dd>
            </div>
            <div>
              <dt>Rua</dt>
              <dd>{endereco.logradouro || "Não informada"}</dd>
            </div>
            <div>
              <dt>Bairro</dt>
              <dd>{endereco.bairro || "Não informado"}</dd>
            </div>
            <div>
              <dt>Cidade</dt>
              <dd>{endereco.localidade}</dd>
            </div>
            <div>
              <dt>Estado</dt>
              <dd>{endereco.uf}</dd>
            </div>
          </dl>
        )}
      </div>
    </section>
  );
}
