import Produto from '../components/Produto'
import * as S from './styles'
import { useGetProdutosQuery } from '../services/api'
import { useDispatch } from 'react-redux'
import { favoritar } from '../store/redurcers/favoritar'

const Produtos = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const dispatch = useDispatch()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          favoritar={() => dispatch(favoritar(produto))}
          estaNosFavoritos={false}
        />
      ))}
    </S.Produtos>
  )
}

export default Produtos
