import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/usuarios">Usuários</Link>
      <Link href="/formulario">Cadastro</Link>
    </header>
  );
}