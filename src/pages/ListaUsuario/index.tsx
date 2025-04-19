import { useEffect, useState } from 'react';
import { UsuarioService } from 'services/Usuario/usuario.service';
import Item from './Item';
import styleTema from 'styles/Tema.module.scss';
import { IListaUsuario } from 'types/usuario';

export default function ListaUsuario() {
  const [listaUsuarios, setListaUsuarios] = useState<IListaUsuario[]>([]);

  useEffect(() => {
    async function getData() {
      const usuarioService: UsuarioService = new UsuarioService();
      setListaUsuarios(await usuarioService.getListaUsuario());
    }
    getData();
  }, []);

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