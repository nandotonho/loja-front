import { useRecoilValue } from "recoil"
import { listaProdutosState } from "state/atom"

const useListaProdutos = () => {
  return useRecoilValue(listaProdutosState);
}

export default useListaProdutos;