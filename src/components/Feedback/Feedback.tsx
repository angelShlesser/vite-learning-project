import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedback/feedbackSlice"
import { LikeImg, DislikeImg } from "assets"
import Button from "components/Button/Button"

import { FeedbackWrapper, Count, Image, ImageContainer } from "./styles"

function Feedback() {
  const dispatch = useAppDispatch()
  const like = useAppSelector(feedbackSliceSelectors.like)
  const dislike = useAppSelector(feedbackSliceSelectors.dislike)

  const addLike = () => {
    dispatch(feedbackSliceActions.addLike())
  }

  const addDislike = () => {
    dispatch(feedbackSliceActions.addDislike())
  }

  const resetResults = () => {
    dispatch(feedbackSliceActions.resetResults())
  }

  return (
    <FeedbackWrapper>
      <ImageContainer>
        <Image src={LikeImg} alt="like" onClick={addLike} />
      </ImageContainer>
      <Count>{like}</Count>
      <ImageContainer>
        <Image src={DislikeImg} alt="dislike" onClick={addDislike} />
      </ImageContainer>
      <Count>{dislike}</Count>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  )
}

export default Feedback
