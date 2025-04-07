import { useState } from "react";
import Botao from "../Botao";

interface Props {
  setListaUsuarios: React.Dispatch<React.SetStateAction<{
    nome: string;
    email: string;
}[]>>
}

export default function Formulario({ setListaUsuarios }: Props) {
  const[usuario, setUsuario] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  function incluiUsuario(evento: React.FormEvent) {
    evento.preventDefault();

    setListaUsuarios(listaUsuariosAntiga =>
      [
        ...listaUsuariosAntiga,
        {
          nome: usuario.nome,
          email: usuario.email
        }
      ]
    );

    setUsuario({
      nome: '',
      email: '',
      senha: ''
    });
  }

  return (
    <form onSubmit={incluiUsuario}>
      <div>
        <label htmlFor="nome">
          Nome
        </label>
        <input
          type="text"
          name="nome"
          id="nome"
          value={usuario.nome}
          onChange={evento => setUsuario({...usuario, nome: evento.target.value})}
          placeholder="Nome do usuário"
          required
        />
      </div>
      <div>
        <label htmlFor="email">
          E-mail
        </label>
        <input
          type="text"
          name="email"
          id="email"
          value={usuario.email}
          onChange={evento => setUsuario({...usuario, email: evento.target.value})}
          placeholder="E-mail do usuário"
          required
        />
      </div>
      <div>
        <label htmlFor="senha">
          Senha
        </label>
        <input
          type="password"
          name="senha"
          id="senha"
          value={usuario.senha}
          onChange={evento => setUsuario({...usuario, senha: evento.target.value})}
          placeholder="Senha do usuário"
          required
        />
      </div>
      <Botao>
        Incluir
      </Botao>
    </form>
  )
}