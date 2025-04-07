interface Props {
  nome: string,
  email: string
}

export default function Item({ nome, email }: Props) {
  return (
    <li>
      <h3>
        Nome: {nome}
      </h3>
      <h3>
        Email: {email}
      </h3>
    </li>
  )
}
