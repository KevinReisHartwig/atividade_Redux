import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const produtoExistenteIndex = state.itens.findIndex(
        (p) => p.id === produto.id
      )

      if (produtoExistenteIndex !== -1) {
        state.itens.splice(produtoExistenteIndex, 1)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
