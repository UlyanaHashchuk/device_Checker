import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../../contexts/AuthContext'
import { AUTHENTICATION, TYPE } from '../../../constants'
import logoIcon from '../../../icons/logo.jpg'
import { Text } from '../../BaseStyles'
import {
  BannerContainer,
  LogoContainer,
  Wrapper,
  LogoutButton,
} from './index.styled'

const TopMenu = () => {
  const {
    authState,
    logout,
    userInfo: { login, type },
  } = useContext(AuthContext)
  const isUserLogIn = authState === AUTHENTICATION.authenticated
  const isAdmin = type === TYPE.admin

  return (
    <BannerContainer verticalCenter>
      <Link to="/devices">
        <LogoContainer>
          <img src={logoIcon} width="60px" height="60px" alt="logo" />
          <h2>deviceChecker</h2>
        </LogoContainer>
      </Link>
      <Wrapper>
        <Text>{login}</Text>
        {isUserLogIn && <LogoutButton onClick={logout}>ODHLASIT</LogoutButton>}
        {isUserLogIn && isAdmin && (
          <LogoutButton>
            <Link to="/createDevice">PŘIDAT ZAŘÍZENÍ</Link>
          </LogoutButton>
        )}
      </Wrapper>
    </BannerContainer>
  )
}

export default TopMenu
