import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";

// Criar uma tarefa nova
export async function criarTarefa(texto) {
  await addDoc(collection(db, "tarefas"), {
    texto,
    feita: false,
    criadaEm: serverTimestamp(),
  });
}

// Ouvir as tarefas em tempo real
export function ouvirTarefas(aoMudar, aoFalhar) {
  const q = query(collection(db, "tarefas"), orderBy("criadaEm"));

  return onSnapshot(
    q,
    (resultado) => {
      const lista = resultado.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      aoMudar(lista);
    },
    aoFalhar,
  );
}

// Marcar ou desmarcar como feita
export async function alternarTarefa(id, feita) {
  await updateDoc(doc(db, "tarefas", id), {
    feita: !feita,
  });
}

// Apagar a tarefa
export async function removerTarefa(id) {
  await deleteDoc(doc(db, "tarefas", id));
}
