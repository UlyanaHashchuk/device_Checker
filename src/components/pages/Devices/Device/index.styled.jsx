import styled from 'styled-components'
import { Text } from '../../../BaseStyles'

const DeviceContainer = styled.div`
  min-width: 330px;
  max-height: 410px;
  background-color: white;
  border: 1px solid #d4d0cd;
`

const ImageContainer = styled.div`
  position: relative;
  height: 200px;
  margin-bottom: 10px;
  text-align: center;
`

const Image = styled.img`
  height: 100%;
  margin-top: 5px;
`

const BorrowedInfo = styled(Text)`
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  padding: 8px;
  text-align: left;
  background-color: rgba(59, 59, 59, 0.9);
  color: white;
  width: 100%;
`

const DeviceInfo = styled.div`
  box-sizing: border-box;
  padding: 10px;

  & > div:first-child {
    height: 70px;
  }

  & > ${Text} {
    margin: 18px 0 10px 0;
  }
`

export { DeviceContainer, Image, ImageContainer, BorrowedInfo, DeviceInfo }
