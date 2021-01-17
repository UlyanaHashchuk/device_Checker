import styled from 'styled-components'
import { Text, Flex } from '../../BaseStyles'

const BannerContainer = styled(Flex)`
  box-sizing: border-box;
  background-color: #ff4d00;
  width: 100%;
  height: 90px;
  padding: 0 24px;
  justify-content: space-between;

  @media only screen and (max-width: 770px) {
    height: 60px;
    padding: 0 12px;
  }
`

const LogoContainer = styled(Flex)`
  color: black;

  & > h2 {
    margin-left: 10px;
  }

  @media only screen and (max-width: 770px) {
    h2 {
      display: none;
    }
    img {
      width: 40px;
      height: 40px;
    }
  }
`

const LogoutButton = styled.button`
  padding: 5px 10px;
  margin-left: 10px;

  & > a {
    color: black;
  }
`

const Wrapper = styled(Flex)`
  justify-content: space-between;

  & > ${Text} {
    color: white;
  }

  @media only screen and (max-width: 770px) {
    ${Text} {
      display: none;
    }
  }
`

const Icon = styled.div`
  border-radius: 50%;
  background-color: white;
  color: #ff4d00;
  font-size: 16px;
  font-weight: 500;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;

  &:hover {
    cursor: pointer;
    background-color: #ffe1d4;
  }
`

export { BannerContainer, LogoContainer, LogoutButton, Wrapper, Icon }
