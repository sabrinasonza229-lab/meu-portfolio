import Link from "next/link";
import styles from "./Cabecalho.module.css";

// Recebe tudo por props: o mesmo componente serve para qualquer pessoa
export default function Cabecalho({ rotulo, titulo, nome, resumo }) {
  return (
    <section className={`container ${styles.hero}`}>
      <span className="rotulo">{rotulo}</span>

      <h1 className={styles.titulo}>
        {titulo}
        <span className={`destaque ${styles.nome}`}>{nome}</span>
      </h1>

      <p className={styles.resumo}>{resumo}</p>

      <div className={styles.acoes}>
        <Link href="/projetos" className="pilula pilula-cheia">
          Ver projetos
        </Link>
        <Link href="/contato" className="pilula">
          Falar comigo
        </Link>
      </div>

      {/* Só enfeite, por isso aria-hidden */}
      <div className={styles.brilho} aria-hidden="true" />
    </section>
  );
}
