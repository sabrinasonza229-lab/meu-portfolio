// POST /api/contato: recebe o formulário de contato
// Status: 201 criado, 400 pedido inválido
export async function POST(request) {
  let dados;

  try {
    dados = await request.json();
  } catch {
    return Response.json({ erro: "Corpo da requisição inválido" }, { status: 400 });
  }

  const nome = typeof dados.nome === "string" ? dados.nome.trim() : "";
  const email = typeof dados.email === "string" ? dados.email.trim() : "";
  const mensagem = typeof dados.mensagem === "string" ? dados.mensagem.trim() : "";

  // O servidor valida de novo, porque o navegador pode ser enganado
  if (nome.length < 3) {
    return Response.json({ erro: "Nome obrigatório" }, { status: 400 });
  }
  if (!email.includes("@")) {
    return Response.json({ erro: "E-mail inválido" }, { status: 400 });
  }
  if (mensagem.length < 5 || mensagem.length > 1000) {
    return Response.json({ erro: "Mensagem inválida" }, { status: 400 });
  }

  console.log("Nova mensagem de contato:", { nome, email });

  return Response.json({ ok: true }, { status: 201 });
}
