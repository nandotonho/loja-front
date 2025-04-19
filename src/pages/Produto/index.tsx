import { useState } from 'react';
import Botao from 'components/Botao';
import { ProdutoService } from 'services/Produto/produto.service';
import styleTema from 'styles/Tema.module.scss';
import style from 'styles/Formulario.module.scss';

export default function Produto() {
  const[produto, setProduto] = useState({
    nome: '',
    valor: '',
    quantidadeDisponivel: '',
    descricao: '',
    caracteristicas: [],
    imagens: [],
    categoria: ''
  });

  async function incluiProduto(evento: React.FormEvent) {
    evento.preventDefault();

    const produtoService: ProdutoService = new ProdutoService();

    const produtoCriado: boolean = await produtoService.criaProduto(
      {
        ...produto,
        valor: Number(produto.valor),
        quantidadeDisponivel: Number(produto.quantidadeDisponivel)
      }
    );

    if (produtoCriado) {
      setProduto({
          nome: '',
          valor: '',
          quantidadeDisponivel: '',
          descricao: '',
          caracteristicas: [],
          imagens: [],
          categoria: ''
        });
    }

  }

  return (
    <form className={styleTema.container} onSubmit={incluiProduto}>
      <h2 className={styleTema.titulo}>Inclusão de Produto</h2>
      <div className={style.inputContainer}>
        <label htmlFor="nome">
          Nome
        </label>
        <input
          type="text"
          name="nome"
          id="nome"
          value={produto.nome}
          onChange={evento => setProduto({...produto, nome: evento.target.value})}
          placeholder="Nome do produto"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="valor">
          Valor
        </label>
        <input
          type="text"
          name="valor"
          id="valor"
          value={produto.valor}
          onChange={evento => setProduto({...produto, valor: evento.target.value})}
          placeholder="Valor"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="quantidadeDisponivel">
          Quantidade disponível
        </label>
        <input
          type="text"
          name="quantidadeDisponivel"
          id="quantidadeDisponivel"
          value={produto.quantidadeDisponivel}
          onChange={evento => setProduto({...produto, quantidadeDisponivel: evento.target.value})}
          placeholder="Quantidade disponível"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="descricao">
          Descrição
        </label>
        <input
          type="text"
          name="descricao"
          id="descricao"
          value={produto.descricao}
          onChange={evento => setProduto({...produto, descricao: evento.target.value})}
          placeholder="Descrição"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="categoria">
          Categoria
        </label>
        <input
          type="text"
          name="categoria"
          id="categoria"
          value={produto.categoria}
          onChange={evento => setProduto({...produto, categoria: evento.target.value})}
          placeholder="Categoria"
          required
        />
      </div>
      <Botao>
        Incluir
      </Botao>
    </form>
  )
}