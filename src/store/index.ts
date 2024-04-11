// store/index.tsx
import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './redurcers/carrinho'
import favoritosReducer from './redurcers/favoritar'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
