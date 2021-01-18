import { useState, useContext } from 'react'
import AuthContext from '../contexts/AuthContext'
import { borrowPhoneRequest, returnPhoneRequest } from '../api'
import { DEVICE_STATE } from '../constants'

const useBorrowDevice = (borrowed, id) => {
  const {
    userInfo: { login, token },
  } = useContext(AuthContext)

  const getDeviceState = () => {
    if (borrowed) {
      if (login === borrowed.user.login) {
        return DEVICE_STATE.borrowed
      }

      return DEVICE_STATE.notAvailable
    }

    return DEVICE_STATE.available
  }

  const [deviceState, setDeviceState] = useState(getDeviceState())
  const [error, setError] = useState(null)

  const isBorrowedByCurrentUser = deviceState === DEVICE_STATE.borrowed

  const handleClick = () => {
    if (deviceState === DEVICE_STATE.available) {
      borrowPhoneRequest({ token, id })
        .then(() => {
          setError(null)
          setDeviceState(DEVICE_STATE.borrowed)
        })
        .catch(({ error }) => {
          setError(error)
        })
    } else if (deviceState === DEVICE_STATE.borrowed) {
      returnPhoneRequest({ token, id })
        .then(() => {
          setError(null)
          setDeviceState(DEVICE_STATE.available)
        })
        .catch(({ error }) => {
          setError(error)
        })
    }
  }

  return { error, handleClick, deviceState, isBorrowedByCurrentUser }
}

export default useBorrowDevice
