import { atom } from "recoil";
import { IProduto } from "types/produto";
import { listaProdutosAsync, listaUsuariosAsync } from "./seletores";
import { IListaUsuario } from "types/usuario";

export const listaProdutosState = atom<IProduto[]>({
  key: 'listaProdutosState',
  default: listaProdutosAsync
});

export const listaUsuariosState = atom<IListaUsuario[]>({
  key: 'listaUsuariosState',
  default: listaUsuariosAsync
});
