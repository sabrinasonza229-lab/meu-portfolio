// Os dados do portfólio ficam aqui, separados da tela.
// Para adicionar um projeto, é só incluir um objeto novo na lista.

export const projetos = [
  {
    id: 1,
    titulo: "Calculadora",
    descricao: "Feita em JavaScript",
    detalhes:
      "Uma calculadora que faz as quatro operações. Foi o projeto para praticar lógica, funções e manipulação da página com JavaScript puro.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    titulo: "Jogo da adivinhação",
    descricao: "Com dicas de maior e menor",
    detalhes:
      "O computador sorteia um número e a pessoa tenta acertar. A cada palpite, o jogo diz se o número é maior ou menor. Usa condições, repetição e eventos.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    titulo: "Página pessoal",
    descricao: "HTML, CSS e modo escuro",
    detalhes:
      "Uma página de apresentação feita com HTML e CSS, com botão para alternar entre o modo claro e o modo escuro.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
];

// Seu usuário do GitHub: troque aqui ou use GITHUB_USER no .env.local
export const GITHUB_USUARIO = process.env.GITHUB_USER ?? "SEU-USUARIO-AQUI";

export const perfil = {
  nome: "Nattaly Sabrina",
  rotulo: "Portfólio · 2026",
  titulo: "Minha página",
  resumo: "Estudante de desenvolvimento web, criando projetos e aprendendo a cada etapa.",
};
