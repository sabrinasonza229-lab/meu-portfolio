import Image from "next/image";
import Link from "next/link";
import BuscaCep from "./Componentes/BuscaCep";
import Cabecalho from "./Componentes/Cabecalho";
import Cartao from "./Componentes/Cartao";
import Contato from "./Componentes/Contato";
import ListaRepos from "./Componentes/ListaRepos";
import Secao from "./Componentes/Secao";
import Tarefas from "./Componentes/Tarefas";
import { perfil, projetos } from "./dados";
import grade from "./grade.module.css";
import styles from "./page.module.css";

// A página inicial reúne tudo: cabeçalho, sobre mim, projetos,
// CEP, contato, tarefas e GitHub
export default function Home() {
  return (
    <>
      <Cabecalho
        rotulo={perfil.rotulo}
        titulo={perfil.titulo}
        nome={perfil.nome}
        resumo={perfil.resumo}
      />

      <Secao titulo="Sobre mim" rotulo="Quem sou eu">
        <div className={styles.sobre}>
          {/* O Image precisa de width, height e alt */}
          <Image
            src="/foto.jpg"
            width={300}
            height={300}
            alt="Foto de Nattaly Sabrina"
            className={styles.foto}
            priority
          />
          <div className={styles.texto}>
            <p>Estou aprendendo e construindo projetos com tecnologias web.</p>
            <p>
              Este portfólio reúne o que fiz nas aulas: componentes, rotas, APIs e banco de
              dados.
            </p>
          </div>
        </div>
      </Secao>

      <Secao titulo="Meus projetos" rotulo="Tudo que já construí">
        {/* map transforma a lista de dados em cartões. A key é o id */}
        <div className={grade.grade}>
          {projetos.map((p, i) => (
            <Cartao key={p.id} indice={i} {...p} />
          ))}
        </div>
        <p style={{ marginTop: 28 }}>
          <Link href="/projetos" className="pilula">
            Ver todos os projetos
          </Link>
        </p>
      </Secao>

      <Secao titulo="Buscar CEP" rotulo="Consumindo uma API">
        <BuscaCep />
      </Secao>

      <Secao titulo="Contato" rotulo="Vamos conversar?">
        <Contato />
      </Secao>

      <Secao titulo="Tarefas" rotulo="Organização">
        <Tarefas />
      </Secao>

      <Secao titulo="GitHub" rotulo="Meus repositórios">
        <ListaRepos />
      </Secao>
    </>
  );
}
