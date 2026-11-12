import Contato from "../Componentes/Contato";
import Secao from "../Componentes/Secao";

export const metadata = {
  title: "Contato",
  description: "Envie uma mensagem para Nattaly Sabrina.",
};

// A página é de servidor, só o formulário (Contato) é de cliente
export default function PaginaContato() {
  return (
    <Secao titulo="Vamos conversar?" rotulo="Contato">
      <Contato />
    </Secao>
  );
}
