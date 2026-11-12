import ListaRepos from "../Componentes/ListaRepos";
import Secao from "../Componentes/Secao";
import { GITHUB_USUARIO } from "../dados";

export const metadata = {
  title: "GitHub",
  description: "Meus repositórios públicos do GitHub.",
};

export default function PaginaGitHub() {
  return (
    <Secao titulo="Meus repositórios" rotulo={`github.com/${GITHUB_USUARIO}`}>
      <ListaRepos />
    </Secao>
  );
}
