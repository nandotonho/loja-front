import { useState } from 'react';
import Botao from 'components/Botao';
import { UsuarioService } from 'services/Usuario/usuario.service';
import styleTema from 'styles/Tema.module.scss';
import style from 'styles/Formulario.module.scss';

export default function Usuario() {
  const[usuario, setUsuario] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  async function incluiUsuario(evento: React.FormEvent) {
    evento.preventDefault();

    const usuarioService: UsuarioService = new UsuarioService();

    const usuarioCriado: boolean = await usuarioService.criaUsuario(
      {
        nome: usuario.nome,
        email: usuario.email,
        senha: usuario.senha
      }
    );

    if (usuarioCriado) {
      setUsuario({
        nome: '',
        email: '',
        senha: ''
      });
    };
  }

  return (
    <form className={styleTema.container} onSubmit={incluiUsuario}>
      <h2 className={styleTema.titulo}>Inclusão de Usuário</h2>
      <div className={style.inputContainer}>
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
      <div className={style.inputContainer}>
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
      <div className={style.inputContainer}>
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