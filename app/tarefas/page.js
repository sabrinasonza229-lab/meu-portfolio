import Secao from "../Componentes/Secao";
import Tarefas from "../Componentes/Tarefas";

export const metadata = {
  title: "Tarefas",
  description: "Lista de tarefas salva num banco de dados na nuvem (Firebase).",
};

export default function PaginaTarefas() {
  return (
    <Secao titulo="Tarefas que não somem" rotulo="Firebase">
      <Tarefas />
    </Secao>
  );
}
