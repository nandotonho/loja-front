import styleTema from 'styles/Tema.module.scss';
import { IProduto } from 'types/produto';

export default function Item(produto: IProduto) {
  return (
    <li className={styleTema.item}>
      <h2>
        Id: {produto.id}
      </h2>
      <h2>
        Nome: {produto.nome}
      </h2>
      <h2>
        Valor: {produto.valor}
      </h2>
      <h2>
        Quantidade disponível: {produto.quantidadeDisponivel}
      </h2>
      <h2>
        Descrição: {produto.descricao}
      </h2>
      <h2>
        Categoria: {produto.categoria}
      </h2>
    </li>
  )
}
