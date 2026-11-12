import styles from "./Rodape.module.css";

export default function Rodape() {
  // Desafio da Aula 1: mostrar o ano atual
  const ano = new Date().getFullYear();

  return (
    <footer className={styles.rodape}>
      <div className={`container ${styles.dentro}`}>
        <p>© {ano} Nattaly Sabrina. Feito com Next.js.</p>
        <p className={styles.suave}>Next.js · JavaScript · Firebase</p>
      </div>
    </footer>
  );
}
