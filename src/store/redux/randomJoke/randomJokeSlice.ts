import { v4 } from "uuid"
import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "store/createAppSlice"

import { RandomJokeState, JokeResponse } from "./types"

const randomJokeInitialState: RandomJokeState = {
  data: [],
  status: "default",
  error: undefined,
}

export const randomJokeSlice = createAppSlice({
  name: "RANDOMJOKE",
  initialState: randomJokeInitialState,
  reducers: create => ({
    getJoke: create.asyncThunk(
      async (arg: any, { rejectWithValue }) => {
        // arg - данные которые вы передаете из вашего компонента, в эту функцию
        // Например: данные, которые вы хотите отправить на сервер
        // console.log(arg)
        const response = await fetch(
          "https://official-joke-api.appspot.com/random_joke"
        )
        const result = response.json()

        if (!response.ok) {
          // Данные переходят в rejected, если response.ok === false
          rejectWithValue(result)
        } else {
          // Данные переходят в fulfilled, если response.ok === true
          return result
        }
      },
      {
        // pending -  будем писать действия, которые выполняются во время запроса, пока он не прислал ответ
        pending: (state: RandomJokeState) => {
          console.log("Pending")
          state.error = undefined
          state.status = "loading"
        },
        // fulfilled -  будем писать действия, которые выполняются после успешно выполненного запроса
        fulfilled: (state: RandomJokeState, action: PayloadAction<JokeResponse>) => {
          console.log("Fulfilled", action)
          state.status = "success"
          state.data = [
            ...state.data,
            {
              answer: action.payload?.punchline,
              question: action.payload?.setup,
              id: v4(),
            },
          ]
        },
        // rejected -  будем писать действия, которые выполняются после прихода ошибки
        rejected: (state: RandomJokeState, action: PayloadAction<any>) => {
          console.log("Rejected", action.payload)
          state.status = "error"
          state.error = action.payload
        },
      },
    ),
  }),
  selectors: {
    joke: (state: RandomJokeState) => state,
  },
})

export const randomJokeSliceActions = randomJokeSlice.actions
export const randomJokeSliceSelectors = randomJokeSlice.selectors
