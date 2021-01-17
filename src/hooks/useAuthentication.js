import { useState, useEffect } from 'react'
import { AUTHENTICATION, SSID } from '../constants'
import { verifyTokenRequest } from '../api'

const getUserData = () => {
  const tokenString = localStorage.getItem(SSID)

  try {
    return JSON.parse(tokenString) || {}
  } catch (e) {
    return {}
  }
}

const useAuthentication = () => {
  const [userInfo, setUserInfo] = useState(getUserData())
  const [authState, setAuthState] = useState(AUTHENTICATION.authenticating)

  const verifyToken = ({ id, token }) => {
    if (token) {
      verifyTokenRequest({ id, token })
        .then(({ error }) => {
          setAuthState(
            error
              ? AUTHENTICATION.unauthenticated
              : AUTHENTICATION.authenticated
          )
        })
        .catch(() => {
          setAuthState(AUTHENTICATION.unauthenticated)
        })
    } else {
      setAuthState(AUTHENTICATION.unauthenticated)
    }
  }

  useEffect(() => {
    verifyToken(userInfo)
  }, [userInfo])

  const saveUserInfo = (data) => {
    localStorage.setItem(SSID, JSON.stringify(data))
    setUserInfo(data)
    setAuthState(AUTHENTICATION.authenticated)
  }

  const logout = () => {
    localStorage.removeItem(SSID)
    setAuthState(AUTHENTICATION.unauthenticated)
    setUserInfo({})
  }

  return {
    saveUserInfo,
    userInfo,
    authState,
    logout,
  }
}

export default useAuthentication
