import Item from './Item';
import styleTema from 'styles/Tema.module.scss';
import useListaUsuarios from 'state/hooks/useListaUsuarios';

export default function ListaUsuario() {
  const listaUsuarios = useListaUsuarios();
  // const [listaUsuarios, setListaUsuarios] = useState<IListaUsuario[]>([]);

  // useEffect(() => {
  //   async function getData() {
  //     const usuarioService: UsuarioService = new UsuarioService();
  //     setListaUsuarios(await usuarioService.getListaUsuario());
  //   }
  //   getData();
  // }, []);

  return (
    <aside className={styleTema.container}>
      <h2 className={styleTema.titulo}>Usuários</h2>
      <ul className={styleTema.lista}>
        {listaUsuarios.map(usuario => (
          <Item
            key={usuario.id}
            {...usuario}
          />
        ))}
      </ul>
    </aside>
  )
}