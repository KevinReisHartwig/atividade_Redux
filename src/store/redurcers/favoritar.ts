// store/redurcers/favoritos.tsx
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
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já está nos favoritos')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionar } = favoritosSlice.actions
export default favoritosSlice.reducer
