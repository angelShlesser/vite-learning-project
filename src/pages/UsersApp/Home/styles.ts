import styled from "@emotion/styled"

export const HomePageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 500px;
  min-height: 300px;
  height: fit-content;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid black;
`

export const UserFormName = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: purple;
`
