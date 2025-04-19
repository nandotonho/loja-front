import http from '../../http';
import { IProduto } from 'types/produto';

export class ProdutoService {
  public async getListaProduto(): Promise<IProduto[]> {
    let listaProduto: IProduto[] = [];

    await http.get('produtos')
      .then(resposta => {
        listaProduto = resposta.data
      })
      .catch(erro => {
        console.log(erro);
      });
    
    return listaProduto;
  }

  public async criaProduto(produto: IProduto): Promise<boolean> {
    let produtoCriado: boolean = false;

    await http.post('produtos', produto)
      .then(resposta => {
        alert(resposta.data.mensagem);
        produtoCriado = true;
      })
      .catch(erro => {
        console.log(erro);
        alert(Array.isArray(erro.response.data.message)
          ? erro.response.data.message[0]
          : erro.response.data.message
        );
        produtoCriado = false;
      });

    return produtoCriado;
  }
}
