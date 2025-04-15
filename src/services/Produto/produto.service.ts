import { IProduto } from 'types/produto';

export class ProdutoService {
  private produtoRepository: IProduto[] = [];

  constructor() {
    const produtoRepositoryStr: string = localStorage.getItem('produtoRepository') || '';

    this.produtoRepository = produtoRepositoryStr !== ''
      ? JSON.parse(produtoRepositoryStr, (key, value) => {
          return value;
        }) || []
      : [];
  }

  public getListaProduto(): IProduto[] {
    return this.produtoRepository;
  }

  public criaProduto(produto: IProduto) {
    this.produtoRepository.push(produto);
    localStorage.setItem('produtoRepository', JSON.stringify(this.produtoRepository));
  }
}
