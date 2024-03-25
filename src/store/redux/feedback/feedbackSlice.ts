import { createAppSlice } from "store/createAppSlice"

import { FeedbackSliceState } from "./types"

const feedbackInitialState: FeedbackSliceState = {
  likeCount: 0,
  dislikeCount: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    addLike: create.reducer((state: FeedbackSliceState) => {
      state.likeCount = state.likeCount + 1
    }),
    addDislike: create.reducer((state: FeedbackSliceState) => {
      state.dislikeCount = state.dislikeCount + 1
    }),
    // resetResults: create.reducer((state: FeedbackSliceState) => {
    //   state.likeCount = 0
    //   state.dislikeCount = 0
    // }),
    resetResults: create.reducer(() => feedbackInitialState)
  }),
  selectors: {
    like: (state: FeedbackSliceState) => {
      return state.likeCount
    },
    dislike: (state: FeedbackSliceState) => {
      return state.dislikeCount
    },
  },
})

export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors
