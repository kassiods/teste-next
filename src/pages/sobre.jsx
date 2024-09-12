import Header from "@/components/Header";
import Head from "next/head";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre</title>
      </Head>
      <Header />
      <main>
        <h1>Sobre</h1>
        <p className="sobre">Meu nome é kassio, tenho 16 anos e estou amando utilizar next</p>
        <img className="foto" src="/galery/eba.png" alt="" />
      </main>
    </>
  );
}