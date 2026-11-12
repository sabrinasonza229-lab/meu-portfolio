import Link from "next/link";
import styles from "./not-found.module.css";

// Página 404: aparece para qualquer endereço que não existe
export default function NotFound() {
  return (
    <section className={`container ${styles.pagina}`}>
      <p className={styles.codigo}>404</p>
      <h1 className={styles.titulo}>Página não encontrada</h1>
      <p className={styles.texto}>O endereço que você abriu não existe ou foi movido.</p>
      <Link href="/" className="pilula pilula-cheia">
        Voltar ao início
      </Link>
    </section>
  );
}
