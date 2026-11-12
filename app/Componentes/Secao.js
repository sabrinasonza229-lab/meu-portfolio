import styles from "./Secao.module.css";

// Moldura de cada seção: o conteúdo chega pelo children
export default function Secao({ titulo, rotulo, children }) {
  return (
    <section className={`container ${styles.secao}`}>
      {rotulo && <span className="rotulo">{rotulo}</span>}
      <h2 className={styles.titulo}>{titulo}</h2>
      {children}
    </section>
  );
}
