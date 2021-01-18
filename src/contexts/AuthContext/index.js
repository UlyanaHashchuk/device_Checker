import React from 'react'
import { AUTHENTICATION } from '../../constants'

export default React.createContext({
  userInfo: {},
  saveUserInfo: () => {},
  authState: AUTHENTICATION.authenticating,
  logout: () => {},
})
