import { PayloadAction } from "@reduxjs/toolkit"
// Импортируем createAppSlice, чтобы создать новый slice
import { createAppSlice } from "store/createAppSlice"

import { CounterSliceState } from "./types"

const counterInitialState: CounterSliceState = {
  count: 0,
}

// createAppSlice - функция, которая возвращает новый слайс и принимает в качестве аргумента обьект
export const counterSlice = createAppSlice({
  // name - дает имя слайсу
  name: "COUNTER",
  // initialState - принимает в себя обьект с парами ключ-значение, значения которых вы указываете такие,
  // какие вы хотите видеть по умолчанию
  initialState: counterInitialState,
  // reducers - это функция, коотрая создает редьюсеры(возвращает обьект редьюсеров)
  reducers: create => ({
    // создаем функцию редьюсер, которая будет увеличивать счетчик на + 1
    // Эта функция создается с помощью create.reducer
    // create.reducer - принимает в себя функцию коллбэк, эта функция коллбэк, имеет 2 аргумента
    // 1 аргумент - state - текущее состояние в хранилище
    // 2 агумент - action - это обьект из 2 пар ключ.значения
    // - type - это тип экшена
    // - payload - то значение, которое мы передаем из компонента
    add: create.reducer((state: CounterSliceState) => {
      state.count = state.count + 1
    }),
    minus: create.reducer((state: CounterSliceState) => {
      state.count = state.count - 1
    }),
    multiply: create.reducer(
      (state: CounterSliceState, action: PayloadAction<number>) => {
        console.log(action)
        state.count = Number((state.count * action.payload).toFixed(2))
      },
    ),
    divide: create.reducer((state: CounterSliceState, action: PayloadAction<number>) => {
      state.count = Number((state.count / action.payload).toFixed(2))
    }),
  }),
  // Селекторы позволяют забрать в компонента данные из хранилища
  selectors: {
    count: (state: CounterSliceState) => state.count,
  },
})

export const counterSliceActions = counterSlice.actions
export const counterSliceSelectors = counterSlice.selectors
