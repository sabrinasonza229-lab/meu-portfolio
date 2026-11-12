import Link from "next/link";
import { notFound } from "next/navigation";
import { projetos } from "../../dados";
import styles from "./projeto.module.css";

// Cria as páginas /projetos/1, /projetos/2... na hora do build
export function generateStaticParams() {
  return projetos.map((p) => ({ id: String(p.id) }));
}

function buscarProjeto(id) {
  return projetos.find((p) => p.id === Number(id));
}

// O título da aba muda de acordo com o projeto
export async function generateMetadata({ params }) {
  const { id } = await params;
  const projeto = buscarProjeto(id);
  return { title: projeto ? projeto.titulo : "Projeto não encontrado" };
}

// Rota dinâmica: [id] aceita qualquer valor.
// Nesta versão do Next, params é uma Promise, por isso o await.
export default async function Projeto({ params }) {
  const { id } = await params;
  const projeto = buscarProjeto(id);

  // Se o id não existe, mostra a página 404
  if (!projeto) notFound();

  return (
    <article className={`container ${styles.pagina}`}>
      <Link href="/projetos" className={styles.voltar}>
        ← Todos os projetos
      </Link>

      <span className="rotulo">Projeto {String(projeto.id).padStart(2, "0")}</span>
      <h1 className={styles.titulo}>{projeto.titulo}</h1>
      <p className={styles.descricao}>{projeto.descricao}</p>

      <p className={styles.detalhes}>{projeto.detalhes}</p>

      <h2 className={styles.sub}>Tecnologias</h2>
      <ul className={styles.tags}>
        {projeto.tecnologias.map((t) => (
          <li key={t} className={styles.tag}>
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
