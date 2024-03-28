import { createAppSlice } from "store/createAppSlice"

import { RandomUserState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

const randomUserInitialState: RandomUserState = {
  data: undefined,
  isLoading: false,
  error: undefined,
}

export const randomUserSlice = createAppSlice({
  name: "RANDOM_USER",
  initialState: randomUserInitialState,
  reducers: create => ({
    getRandomUser: create.asyncThunk(
      async (arg: any, { rejectWithValue }) => {
        const response = await fetch("https://randomuser.me/api/")
        const result = await response.json()

        if (!response.ok) {
          rejectWithValue(result)
        } else {
          return result
        }
      },
      {
        pending: (state: RandomUserState) => {
          state.error = undefined
          state.isLoading = true
        },
        fulfilled: (state: RandomUserState, action: PayloadAction<any>) => {
          state.isLoading = false
          state.data = action.payload.results[0]

          //   console.log(action.payload.results[0])
        },
        rejected: (state: RandomUserState, action: PayloadAction<any>) => {
          state.isLoading = false
          state.error = action.payload
        },
      },
    ),
  }),
  selectors: {
    user: (state: RandomUserState) => state,
  },
})

export const randomUSerActions = randomUserSlice.actions
export const randomUserSelectors = randomUserSlice.selectors
