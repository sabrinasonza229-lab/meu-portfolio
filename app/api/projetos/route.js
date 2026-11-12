import { projetos } from "../../dados";

// Nossa primeira API: GET /api/projetos
// A pasta é o endereço e o nome da função é o método
export async function GET() {
  return Response.json(projetos);
}
