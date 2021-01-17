import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../../../contexts/AuthContext'
import { borrowPhoneRequest, returnPhoneRequest } from '../../../../api'
import { DEVICE_STATE } from '../../../../constants'
import noImage from '../../../../icons/noImage.png'
import { Text, Button } from '../../../BaseStyles'
import {
  DeviceContainer,
  Image,
  ImageContainer,
  BorrowedInfo,
  DeviceInfo,
} from './index.styled'

// 'tr-TR' is date/time formatting to look like: DD.MM.YYYY HH:MM:SS
const formattedDate = (value) => new Date(value).toLocaleString('tr-TR')

const Device = ({
  device: { id, image, model, os, osVersion, vendor, borrowed },
}) => {
  const {
    userInfo: { login, token },
  } = useContext(AuthContext)
  const [error, setError] = useState(null)

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

  return (
    <DeviceContainer>
      <ImageContainer>
        <Image src={image || noImage} alt="mobile image" />
        {borrowed && deviceState !== DEVICE_STATE.available && (
          <BorrowedInfo>
            Vypůjčeno: {borrowed.user.name || 'unknown name'},{' '}
            {formattedDate(borrowed.date) || 'unknown date'}
          </BorrowedInfo>
        )}
      </ImageContainer>
      <DeviceInfo>
        <div>
          <Text $header>{model}</Text>
          <Text $note>{vendor}</Text>
        </div>
        <Text>
          {os} / {osVersion || 'unknown'}
        </Text>
        {error && <Text>*{error}</Text>}
        <Button
          disabled={deviceState === DEVICE_STATE.notAvailable}
          canReturn={isBorrowedByCurrentUser}
          onClick={handleClick}
        >
          {isBorrowedByCurrentUser ? 'VRÁTIT' : 'PŮJČIT'}
        </Button>
      </DeviceInfo>
    </DeviceContainer>
  )
}

export default Device
