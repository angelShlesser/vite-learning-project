import styled from "@emotion/styled"

import { colors } from "styles/colors"

export const RandomUserWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
`

export const RandomUserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 900px;
  min-height: 600px;
  max-height: 720px;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  overflow-y: auto;
  overflow-x: none;
`

export const ButtonContainer = styled.div`
  min-width: 300px;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
`

export const UserAvatarControl = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`

export const UserAvatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`
export const RandomUserName = styled.p`
  font-size: 24px;
  font-weight: bold;
`

export const RandomUserDescription = styled.p`
  font-size: 18px;
  font-weight: bold;
`
