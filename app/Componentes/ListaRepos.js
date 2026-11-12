import { GITHUB_USUARIO } from "../dados";
import styles from "./ListaRepos.module.css";

async function buscarRepos() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USUARIO}/repos?sort=updated&per_page=12`,
      // revalidate: guarda a resposta por 1 hora
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// Componente de servidor: o fetch roda no servidor, sem useState nem useEffect
export default async function ListaRepos() {
  const repos = await buscarRepos();

  if (repos === null || repos.length === 0) {
    return (
      <p className={styles.vazio}>
        Ainda não consegui listar os repositórios. Confira o usuário do GitHub no arquivo{" "}
        <code>app/dados.js</code> (ou na variável <code>GITHUB_USER</code>).
      </p>
    );
  }

  return (
    <ul className={styles.lista}>
      {repos.map((r) => (
        <li key={r.id}>
          <a href={r.html_url} target="_blank" rel="noopener noreferrer" className={styles.repo}>
            <strong>{r.name}</strong>
            <span>{r.description ?? "Sem descrição"}</span>
            {r.language && <em>{r.language}</em>}
          </a>
        </li>
      ))}
    </ul>
  );
}
