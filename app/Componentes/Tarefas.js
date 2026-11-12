"use client";

import { useEffect, useState } from "react";
import { firebaseConfigurado } from "../../lib/firebase";
import {
  alternarTarefa,
  criarTarefa,
  ouvirTarefas,
  removerTarefa,
} from "../../lib/tarefas";
import styles from "./Tarefas.module.css";

// Tarefas de exemplo, usadas só quando o Firebase não está conectado
const exemplo = [
  { id: "1", texto: "Terminar o portfólio", feita: false },
  { id: "2", texto: "Estudar Next.js", feita: true },
  { id: "3", texto: "Enviar currículo", feita: false },
];

export default function Tarefas() {
  const usarBanco = firebaseConfigurado;

  const [tarefas, setTarefas] = useState(usarBanco ? [] : exemplo);
  const [texto, setTexto] = useState("");
  const [erro, setErro] = useState("");

  // Roda uma vez, quando o componente aparece, e começa a ouvir o banco.
  // O return para de ouvir quando a pessoa sai da página.
  useEffect(() => {
    if (!usarBanco) return;
    return ouvirTarefas(setTarefas, () =>
      setErro("Não consegui ler o banco. Confira as regras e as variáveis do Firebase."),
    );
  }, [usarBanco]);

  async function adicionar(e) {
    e.preventDefault();
    const limpo = texto.trim();
    if (!limpo) return;

    try {
      setErro("");
      if (usarBanco) {
        // Não mexe em tarefas aqui: o onSnapshot atualiza sozinho
        await criarTarefa(limpo);
      } else {
        setTarefas([...tarefas, { id: String(Date.now()), texto: limpo, feita: false }]);
      }
      setTexto("");
    } catch {
      setErro("Não consegui salvar a tarefa. Tente de novo.");
    }
  }

  async function alternar(t) {
    try {
      if (usarBanco) {
        await alternarTarefa(t.id, t.feita);
      } else {
        setTarefas(tarefas.map((x) => (x.id === t.id ? { ...x, feita: !x.feita } : x)));
      }
    } catch {
      setErro("Não consegui atualizar a tarefa.");
    }
  }

  async function remover(id) {
    try {
      if (usarBanco) {
        await removerTarefa(id);
      } else {
        setTarefas(tarefas.filter((t) => t.id !== id));
      }
    } catch {
      setErro("Não consegui remover a tarefa.");
    }
  }

  // Desafio da Aula 3: quantas tarefas faltam
  const faltam = tarefas.filter((t) => !t.feita).length;

  return (
    <div className={styles.caixa}>
      <form onSubmit={adicionar} className={styles.form}>
        <input
          className="campo"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nova tarefa"
          aria-label="Nova tarefa"
          maxLength={200}
        />
        <button type="submit" className="pilula pilula-cheia">
          Adicionar
        </button>
      </form>

      {erro && <p className={styles.erro}>{erro}</p>}

      <p className={styles.contador}>
        {tarefas.length === 0
          ? "Nenhuma tarefa ainda."
          : faltam === 0
            ? "Tudo feito!"
            : faltam === 1
              ? "Falta 1 tarefa"
              : `Faltam ${faltam} tarefas`}
      </p>

      <ul className={styles.lista}>
        {tarefas.map((t) => (
          <li key={t.id} className={styles.item}>
            <label className={styles.rotulo}>
              <input type="checkbox" checked={t.feita} onChange={() => alternar(t)} />
              <span className={t.feita ? styles.feita : ""}>{t.texto}</span>
            </label>
            <button type="button" className={styles.remover} onClick={() => remover(t.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      {!usarBanco && (
        <p className={styles.nota}>
          Modo local: as tarefas somem ao recarregar. Conecte o Firebase para guardá-las no banco.
        </p>
      )}
    </div>
  );
}
