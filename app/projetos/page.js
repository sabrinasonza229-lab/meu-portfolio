import Cartao from "../Componentes/Cartao";
import Secao from "../Componentes/Secao";
import { projetos } from "../dados";
import grade from "../grade.module.css";

// metadata muda o título da aba em cada página
export const metadata = {
  title: "Projetos",
  description: "Os projetos que já construí.",
};

export default function Projetos() {
  return (
    <Secao titulo="Meus projetos" rotulo="Tudo o que já construí">
      <div className={grade.grade}>
        {projetos.map((p, i) => (
          <Cartao key={p.id} indice={i} {...p} />
        ))}
      </div>
    </Secao>
  );
}
