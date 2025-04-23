import { useRecoilValue } from "recoil"
import { listaUsuariosState } from "state/atom"

const useListaUsuarios = () => {
  return useRecoilValue(listaUsuariosState);
}

export default useListaUsuarios;