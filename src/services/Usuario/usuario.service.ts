import http from '../../http';
import { IListaUsuario, IUsuario } from 'types/usuario';

export class UsuarioService {
  public async getListaUsuario(): Promise<IListaUsuario[]> {
    let listaUsuario: IListaUsuario[] = [];

    await http.get('http://localhost:3001/usuarios')
      .then(resposta => {
        listaUsuario = resposta.data;
      })
      .catch(erro => {
        console.log(erro);
      }
    );

    return listaUsuario;
  }

  public async criaUsuario(usuario: IUsuario): Promise<boolean> {
    let usuarioCriado: boolean = false;

    await http.post('http://localhost:3001/usuarios', usuario)
      .then(resposta => {
        alert(resposta.data.mensagem);
        usuarioCriado = true;
      })
      .catch(erro => {
        console.log(erro);
        alert(Array.isArray(erro.response.data.message)
          ? erro.response.data.message[0]
          : erro.response.data.message)
        ;
        usuarioCriado = false;
    });

    return usuarioCriado;
  }
}
