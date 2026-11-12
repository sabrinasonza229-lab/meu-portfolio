"use client";

import { useState } from "react";
import styles from "./Curtir.module.css";

// useState guarda o número de curtidas
export default function Curtir() {
  const [curtidas, setCurtidas] = useState(0);

  return (
    <button
      type="button"
      className={styles.botao}
      onClick={() => setCurtidas(curtidas + 1)}
      aria-label={`Curtir. ${curtidas} curtidas até agora`}
    >
      <span aria-hidden="true">♥</span> {curtidas}
    </button>
  );
}
