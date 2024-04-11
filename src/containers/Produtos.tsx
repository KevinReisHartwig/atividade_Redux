import Produto from '../components/Produto'
import * as S from './styles'
import { useGetProdutosQuery } from '../services/api'

const Produtos = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          favoritar={Produtos}
          estaNosFavoritos={false}
        />
      ))}
    </S.Produtos>
  )
}

export default Produtos
