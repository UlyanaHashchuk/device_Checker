import React from 'react'
import { DEVICE_STATE } from '../../../../constants'
import useBorrowedDevice from '../../../../hooks/useBorrowDevice'
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
    deviceState,
    handleClick,
    isBorrowedByCurrentUser,
    error,
  } = useBorrowedDevice(borrowed, id)

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
