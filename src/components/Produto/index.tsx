// components/Produto/index.tsx
import React from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { adicionar } from '../../store/redurcers/carrinho'

type Props = {
  produto: ProdutoType
  favoritar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
}

export type ProdutoType = {
  id: number
  nome: string
  preco: number
  imagem: string
}

const Produto = ({ produto, favoritar, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{produto.preco}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
