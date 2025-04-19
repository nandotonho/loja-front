import { useEffect, useState } from 'react';
import { ProdutoService } from 'services/Produto/produto.service';
import Item from './Item';
import styleTema from 'styles/Tema.module.scss';
import { IProduto } from 'types/produto';

export default function ListaProduto() {
  const [listaProdutos, setListaProdutos] = useState<IProduto[]>([]);

  useEffect(() => {
    async function getData() {
      const produtoService: ProdutoService = new ProdutoService();
      setListaProdutos(await produtoService.getListaProduto());
    }
    getData();
  }, []);

  return (
    <aside className={styleTema.container}>
      <h2 className={styleTema.titulo}>Produtos</h2>
      <ul className={styleTema.lista}>
        {listaProdutos.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}