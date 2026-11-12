import localFont from "next/font/local";
import Menu from "./Componentes/Menu";
import Rodape from "./Componentes/Rodape";
import "./globals.css";

// Fonte Outfit, guardada dentro do projeto (app/fonts)
const outfit = localFont({
  src: "./fonts/Outfit-Variable.woff2",
  variable: "--fonte",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Nattaly Sabrina | Portfólio",
    template: "%s | Nattaly Sabrina",
  },
  description: "Portfólio de desenvolvimento web com projetos em Next.js, APIs e Firebase.",
};

// O layout é a moldura: o menu e o rodapé aparecem em todas as páginas
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={outfit.variable}>
      <body>
        <Menu />
        <main>{children}</main>
        <Rodape />
      </body>
    </html>
  );
}
