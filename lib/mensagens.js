import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, firebaseConfigurado } from "./firebase";

// Desafio: salvar as mensagens do formulário de contato numa coleção
export async function salvarMensagem(dados) {
  if (!firebaseConfigurado) return;

  await addDoc(collection(db, "mensagens"), {
    ...dados,
    criadaEm: serverTimestamp(),
  });
}
