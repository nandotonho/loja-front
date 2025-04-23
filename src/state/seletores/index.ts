import http from "../../http";
import { selector } from "recoil";
import { IProduto } from "types/produto";
import { IListaUsuario } from "types/usuario";

export const listaProdutosAsync = selector({
  key: 'listaProdutosAsync',
  get: async () => {
    let listaProduto: IProduto[] = [];

    await http.get('produtos')
      .then(resposta => {
          listaProduto = resposta.data;
      })
      .catch(erro => {
        console.log(erro);
      });
    
    return listaProduto;
  }
});


export const listaUsuariosAsync = selector({
  key: 'listaUsuariosAsync',
  get: async () => {
    let listaUsuario: IListaUsuario[] = [];

    await http.get('usuarios')
      .then(resposta => {
        listaUsuario = resposta.data;
      })
      .catch(erro => {
        console.log(erro);
      });
    
    return listaUsuario;
  }
});
