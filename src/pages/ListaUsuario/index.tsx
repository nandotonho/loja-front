import { useState } from 'react';
import { UsuarioService } from 'services/Usuario/usuario.service';
import Item from './Item';
import styleTema from 'styles/Tema.module.scss';

export default function ListaUsuario() {
  const usuarioService: UsuarioService = new UsuarioService();
  const [listaUsuarios] = useState<{ nome: string, email: string }[]>
  (
    usuarioService.getListaUsuario()
  );
  return (
    <aside className={styleTema.container}>
      <h2 className={styleTema.titulo}>Usuários</h2>
      <ul className={styleTema.lista}>
        {listaUsuarios.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}