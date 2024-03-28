import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  randomJokeSliceActions,
  randomJokeSliceSelectors,
} from "store/redux/randomJoke/randomJokeSlice"

import Button from "components/Button/Button"

import {
  RandomJokeWrapper,
  ButtonContainer,
  JokeText,
  JokeCard,
} from "./styles"
import { JokeInfo } from "store/redux/randomJoke/types"

function RandomJoke() {
  const dispatch = useAppDispatch()
  const { data, error, status } = useAppSelector(randomJokeSliceSelectors.joke)

  const getJoke = () => {
    dispatch(randomJokeSliceActions.getJoke("Some data"))
  }

  return (
    <RandomJokeWrapper>
      <JokeCard>
        <ButtonContainer>
          <Button
            disabled={status === "loading"}
            name="Get random joke"
            onClick={getJoke}
          />
        </ButtonContainer>
        {data.map((value: JokeInfo, index) => {
          return (
            <JokeText key={value.id}>
              {index + 1}. {value.question}: {value.answer}
            </JokeText>
          )
        })}
      </JokeCard>
    </RandomJokeWrapper>
  )
}

export default RandomJoke
