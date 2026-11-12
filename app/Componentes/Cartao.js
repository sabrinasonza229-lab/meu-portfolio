import Link from "next/link";
import Curtir from "./Curtir";
import Detalhes from "./Detalhes";
import styles from "./Cartao.module.css";

// indice é a posição na lista, usada para variar a cor dos cartões
export default function Cartao({ id, titulo, descricao, detalhes, tecnologias, indice }) {
  const variacao = styles[`v${indice % 3}`];

  return (
    <article className={`${styles.cartao} ${variacao}`}>
      <div className={styles.topo}>
        <span className={styles.numero}>{String(id).padStart(2, "0")}</span>
        <Curtir />
      </div>

      <div className={styles.corpo}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.descricao}>{descricao}</p>

        {/* Desafio da Aula 2: um map dentro do outro, para as tecnologias */}
        <ul className={styles.tags}>
          {tecnologias.map((t) => (
            <li key={t} className={styles.tag}>
              {t}
            </li>
          ))}
        </ul>

        <Detalhes>{detalhes}</Detalhes>

        <Link href={`/projetos/${id}`} className={styles.abrir}>
          Abrir projeto <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
