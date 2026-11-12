"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Menu.module.css";

const links = [
  { href: "/", texto: "Início" },
  { href: "/projetos", texto: "Projetos" },
  { href: "/contato", texto: "Contato" },
];

// Componente de cliente: usa o usePathname para saber a página atual
export default function Menu() {
  const caminho = usePathname();

  return (
    <header className={styles.barra}>
      <nav className={`container ${styles.nav}`} aria-label="Principal">
        <Link href="/" className={styles.logo}>
          NS<span className="destaque">.</span>
        </Link>

        <ul className={styles.lista}>
          {links.map((l) => {
            const ativo = l.href === "/" ? caminho === "/" : caminho.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`${styles.link} ${ativo ? styles.ativo : ""}`}
                  aria-current={ativo ? "page" : undefined}
                >
                  {l.texto}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
