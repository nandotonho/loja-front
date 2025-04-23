import styleTema from 'styles/Tema.module.scss';
import { IListaUsuario } from 'types/usuario';

export default function Item(usuario: IListaUsuario) {
  return (
    <li className={styleTema.item}>
      <h2>
        Id: {usuario.id}
      </h2>
      <h2>
        Nome: {usuario.nome}
      </h2>
    </li>
  )
}
