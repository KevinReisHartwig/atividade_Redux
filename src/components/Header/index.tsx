import React from 'react'
import * as S from './styles'
import { Produto } from '../../App'
import cesta from '../../assets/cesta.png'

type Props = {
  itensNoCarrinho: Produto[]
  favoritos: Produto[]
}

const Header = ({ itensNoCarrinho, favoritos }: Props) => {
  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Cesta" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {valorTotal}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
