"use client";

import { useState } from "react";
import styles from "./Detalhes.module.css";

// Mostrar e esconder com um true/false
export default function Detalhes({ children }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div>
      <button
        type="button"
        className={styles.botao}
        onClick={() => setAberto(!aberto)}
        aria-expanded={aberto}
      >
        {aberto ? "Esconder" : "Ver detalhes"}
      </button>

      {aberto && <p className={styles.texto}>{children}</p>}
    </div>
  );
}
