import React from 'react'
import { useSelector } from 'react-redux'
import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { RootReducer } from '../../store'
import { paraReal } from '../Produto'

const Header = () => {
  const carrinho = useSelector((state: RootReducer) => state.carrinho.itens)
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)

  const valorTotal = carrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Games</h1>
      <div>
        <span>{favoritos.length} Favoritos</span>
        <img src={cesta} />
        <span>
          {carrinho.length} Itens, Valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
