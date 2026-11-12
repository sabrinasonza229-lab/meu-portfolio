# Meu Portfólio

Portfólio feito com **Next.js**, **JavaScript** e **Firebase**, seguindo as aulas de Next.js (1 a 5), a aula de APIs e a aula de Firebase.

## O que tem no projeto

| Página | O que mostra | Aula |
| --- | --- | --- |
| `/` | Tudo em uma página: cabeçalho, Sobre mim (com `Image`), Meus projetos, Buscar CEP, Contato, Tarefas e GitHub | 1 a 5 |
| `/projetos` | Lista de projetos gerada com `map` | 2, 4 |
| `/projetos/[id]` | Uma página para cada projeto (rota dinâmica) | 4 |
| `/tarefas` | Lista de tarefas salva no Firestore, em tempo real | Firebase |
| `/github` | Seus repositórios, buscados pela API do GitHub | 4 |
| `/contato` | Formulário com validação, API própria e Firestore | 3, APIs, Firebase |
| qualquer endereço errado | Página 404 personalizada | 5 |
| `/api/projetos` | API própria (GET) que devolve os projetos em JSON | APIs |
| `/api/contato` | API própria (POST) que valida o formulário | APIs |

## Como o código está organizado

```
app/
  layout.js           moldura: menu + rodapé em todas as páginas
  page.js             página inicial
  dados.js            os dados dos projetos (edite aqui!)
  globals.css         cores, fonte e estilos do site inteiro
  Componentes/        peças reutilizáveis (Cartao, Menu, BuscaCep, Tarefas...)
  projetos/           /projetos e /projetos/[id]
  api/                as duas APIs (route.js)
lib/
  firebase.js         conexão com o banco (único arquivo que conecta)
  tarefas.js          criar, ouvir, alterar e remover tarefas
  mensagens.js        salvar mensagens do contato
firestore.rules       regras de segurança do banco
```

Regra de ouro: **componente não fala com o banco**. Ele chama uma função de `lib/`.

## Rodar no computador

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

No Windows, se o PowerShell reclamar de "script não assinado", use o **Command Prompt** (cmd) no terminal do VS Code.

## Conectar o Firebase

1. Acesse https://console.firebase.google.com e crie um projeto.
2. No menu, abra **Firestore Database** e clique em **Criar banco de dados** (modo de teste, região São Paulo).
3. Na página do projeto, adicione um **app Web** e copie o `firebaseConfig`.
4. Copie `.env.example` para `.env.local` e preencha com os valores copiados.
5. Em **Firestore Database > Regras**, cole o conteúdo de `firestore.rules` e publique.
6. Reinicie o `npm run dev`.

O `.env.local` nunca vai para o GitHub. Na Vercel, cadastre as mesmas variáveis em **Environment Variables**.

## Seu usuário do GitHub

Abra `app/dados.js` e troque o valor de `GITHUB_USUARIO`, ou crie `GITHUB_USER=seuusuario` no `.env.local`.

## Sua foto

Troque o arquivo `public/foto.jpg` por uma foto sua (mantenha o mesmo nome).

## Antes de publicar: o ensaio geral

```bash
npm run build
```

A Vercel roda exatamente esse comando. Se der erro aqui, daria erro lá.

## Enviar para o GitHub

```bash
git status
git add .
git commit -m "Portfólio pronto"
git remote add origin URL-DO-SEU-REPOSITORIO
git branch -M main
git push -u origin main
```

## Levar para outro computador (o do curso)

```bash
git clone URL-DO-SEU-REPOSITORIO
cd meu-portfolio
npm install
```

Depois crie o `.env.local` de novo (ele não vem no GitHub, de propósito) e rode `npm run dev`.

## Publicar na Vercel

1. Entre em https://vercel.com e faça login com o GitHub.
2. **Add New > Project** e importe o repositório `meu-portfolio`.
3. Cadastre as variáveis do `.env.local` em **Environment Variables**.
4. Clique em **Deploy**. Em cerca de um minuto o link está no ar.

Dali em diante, todo `git push` publica a nova versão sozinho.
