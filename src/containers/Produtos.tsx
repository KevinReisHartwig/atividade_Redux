import React, { useState } from 'react'
import Produto from '../components/Produto'
import * as S from './styles'
import { useGetProdutosQuery } from '../services/api'
import { useDispatch } from 'react-redux'
import { favoritar } from '../store/redurcers/favoritar'
import { Produto as ProdutoType } from '../App'

const Produtos = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const dispatch = useDispatch()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <S.Produtos>
      {produtos?.map((produto: ProdutoType) => (
        <ProdutoItem key={produto.id} produto={produto} dispatch={dispatch} />
      ))}
    </S.Produtos>
  )
}

const ProdutoItem = ({
  produto,
  dispatch
}: {
  produto: ProdutoType
  dispatch: any
}) => {
  const [estaNosFavoritos, setEstaNosFavoritos] = useState(false)

  const toggleFavorito = () => {
    setEstaNosFavoritos(!estaNosFavoritos)
    dispatch(favoritar(produto))
  }

  return (
    <Produto
      produto={produto}
      estaNosFavoritos={estaNosFavoritos}
      toggleFavorito={toggleFavorito}
    />
  )
}

export default Produtos
