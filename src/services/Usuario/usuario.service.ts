import { IUsuario } from 'types/usuario';

export class UsuarioService {
  private usuarioRepository: IUsuario[] = [];

  constructor() {
    const usuarioRepositoryStr: string = localStorage.getItem('usuarioRepository') || '';

    this.usuarioRepository = usuarioRepositoryStr !== ''
      ? JSON.parse(usuarioRepositoryStr, (key, value) => {
          return value;
        }) || []
      : [];
  }

  public getListaUsuario(): { nome: string, email: string }[] {
    return this.usuarioRepository.map(usuario => (
      {...usuario,
        nome: usuario.nome,
        email: usuario.email
      }
    ));
  }

  public criaUsuario(usuario: IUsuario) {
    this.usuarioRepository.push(usuario);
    localStorage.setItem('usuarioRepository', JSON.stringify(this.usuarioRepository));
  }
}
