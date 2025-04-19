import styleTema from 'styles/Tema.module.scss';

interface Props {
  id: string,
  nome: string
}

export default function Item({ id, nome }: Props) {
  return (
    <li className={styleTema.item}>
      <h2>
        Id: {id}
      </h2>
      <h2>
        Nome: {nome}
      </h2>
    </li>
  )
}
