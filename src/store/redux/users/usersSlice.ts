import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "store/createAppSlice"

import { UsersSliceState, UserData } from "./types"

const usersSliceInitialState: UsersSliceState = {
  users: [],
}

export const usersSlice = createAppSlice({
  name: "USERS",
  initialState: usersSliceInitialState,
  reducers: create => ({
    addUser: create.reducer(
      (state: UsersSliceState, action: PayloadAction<UserData>) => {
        console.log(action.payload)
        state.users = [...state.users, action.payload]
      },
    ),
    deleteUser: create.reducer(
      (state: UsersSliceState, action: PayloadAction<string>) => {
        // Повторяем как работает filter()
        // const numbers = [1, 2, 3, 4, 5]
        // const numbersWithoutFive = numbers.filter((value: number) => {
        //   return value !== 5
        // })
        // console.log(numbersWithoutFive)
        state.users = [...state.users].filter(
          (value: UserData) => value.id !== action.payload,
        )
      },
    ),
    deleteAllUsers: create.reducer(() => usersSliceInitialState),
  }),
  selectors: {
    users: (state: UsersSliceState) => state.users,
  },
})

export const usersSliceActions = usersSlice.actions
export const usersSliceSelectors = usersSlice.selectors
