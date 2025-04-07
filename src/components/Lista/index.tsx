import Item from './Item';

interface Props {
  listaUsuarios: { nome: string, email: string }[];
}

export default function Lista({ listaUsuarios }: Props) {
  return (
    <aside>
      <h2>Usuários</h2>
      <ul>
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
