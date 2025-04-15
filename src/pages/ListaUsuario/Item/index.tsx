import styleTema from 'styles/Tema.module.scss';

interface Props {
  nome: string,
  email: string
}

export default function Item({ nome, email }: Props) {
  return (
    <li className={styleTema.item}>
      <h2>
        Nome: {nome}
      </h2>
      <h2>
        Email: {email}
      </h2>
    </li>
  )
}
