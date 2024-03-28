import { v4 } from "uuid"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  usersSliceSelectors,
  usersSliceActions,
} from "store/redux/users/usersSlice"

import { UsersPageWrapper, UserCard, Paragraph } from "./styles"
import { UserData } from "store/redux/users/types"
import Button from "components/Button/Button"

function Users() {
  const dispatch = useAppDispatch()
  // В users лежит либо пустой массив, либо массив обьектов
  const users = useAppSelector(usersSliceSelectors.users)

  const deleteAllUsers = () => {
    dispatch(usersSliceActions.deleteAllUsers())
  }

  const userCards = users.map((userInfo: UserData) => {
    const deleteUser = () => {
      dispatch(usersSliceActions.deleteUser(userInfo.id))
    }

    return (
      <UserCard key={v4()}>
        <Paragraph>Full name: {userInfo.firstlastName}</Paragraph>
        <Paragraph>Age: {userInfo.age}</Paragraph>
        <Paragraph>Job: {userInfo.jobTitle}</Paragraph>
        <Button name="Delete user" onClick={deleteUser} />
      </UserCard>
    )
  })

  console.log(userCards)

  return (
    <UsersPageWrapper>
      {userCards}
      {users.length > 0 && (
        <Button isRed name="Delete all users" onClick={deleteAllUsers} />
      )}
    </UsersPageWrapper>
  )
}

export default Users
