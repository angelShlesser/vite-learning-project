import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  randomUSerActions,
  randomUserSelectors,
} from "store/redux/randomUser/randomUserSlice"

import Button from "components/Button/Button"

import {
  RandomUserWrapper,
  ButtonContainer,
  RandomUserCard,
  RandomUserDescription,
  RandomUserName,
  UserAvatar,
  UserAvatarControl,
  UserInfo,
} from "./styles"

function RandomUser() {
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useAppSelector(randomUserSelectors.user)

  const getRandomUser = () => {
    // Нужно сделать dispatch(action), котрый плучит данные пользователя
    dispatch(randomUSerActions.getRandomUser(undefined))
  }
  useEffect(() => {
    if (!!error) {
      alert("Some network error")
    }
  }, [error])

  return (
    <RandomUserWrapper>
      <RandomUserCard>
        {data && (
          <UserInfo>
            <UserAvatarControl>
              <UserAvatar src={data?.picture?.large} alt="UserAvatar" />
            </UserAvatarControl>
            <RandomUserName>
              {`${data.name.title} ${data.name.first} ${data.name.last}`}
            </RandomUserName>
            <RandomUserDescription>Email: {data.email}</RandomUserDescription>
            <RandomUserDescription>Age: {data.dob.age}</RandomUserDescription>
          </UserInfo>
        )}
        <ButtonContainer>
          <Button
            disabled={isLoading}
            name="Get random user"
            onClick={getRandomUser}
          />
        </ButtonContainer>
      </RandomUserCard>
    </RandomUserWrapper>
  )
}

export default RandomUser
