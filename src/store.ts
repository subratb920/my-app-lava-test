import { configureStore, createSlice } from '@reduxjs/toolkit'

const counter = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

export const { increment } = counter.actions

export const store = configureStore({ reducer: { counter: counter.reducer } })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
