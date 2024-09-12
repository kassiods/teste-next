import Header from "@/components/Header";
import { useEffect, useState } from "react";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://hono-api-acyp.onrender.com/api/users")
      .then(async (res) => {
        const dados = await res.json();
        setUsuarios(dados);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      <main>
        <h1>Usuários cadastrados:</h1>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr>
                <td>{usuario.name}</td>
                <td>{usuario.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}