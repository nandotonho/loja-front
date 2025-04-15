import styleTema from 'styles/Tema.module.scss';

interface Props {
  nome: string;
  valor: number;
  quantidadeDisponivel: number;
  descricao: string;
  caracteristicas: {
    nome: string;
    descricao: string;
  }[];
  imagens: {
    url: string;
    descricao: string;
  }[];
  categoria: string;
}

export default function Item(produto: Props) {
  return (
    <li className={styleTema.item}>
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
