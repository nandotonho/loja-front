import Item from './Item';
import styleTema from 'styles/Tema.module.scss';
import useListaProdutos from 'state/hooks/useListaProdutos';

export default function ListaProduto() {
  const listaProdutos = useListaProdutos();

  return (
    <aside className={styleTema.container}>
      <h2 className={styleTema.titulo}>Produtos</h2>
      <ul className={styleTema.lista}>
        {listaProdutos.map(produto => (
          <Item
            key={produto.id}
            {...produto}
          />
        ))}
      </ul>
    </aside>
  )
}