import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../../contexts/AuthContext'
import { getAllDevicesRequest } from '../../../api'
import { Text } from '../../BaseStyles'
import SearchFilters from './SearchFilters'
import DeviceList from './DeviceList'
import Container from './index.styled'

const Devices = () => {
  const [devices, setDevices] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showAvailable, setShowAvailable] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState({
    os: 'Nezáleží',
    vendor: 'Nezáleží',
  })
  const [searchInput, setSearchInput] = useState('')
  const {
    userInfo: { token },
  } = useContext(AuthContext)

  const showData = !isLoading && devices.length > 0

  const settingSelectedOptions = (value, key) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  useEffect(() => {
    if (token) {
      getAllDevicesRequest({
        token,
      }).then((data) => {
        setIsLoading(false)
        setDevices(data)
      })
    }
  }, [token, devices.length])

  return (
    <Container>
      <SearchFilters
        showAvailable={showAvailable}
        setShowAvailable={setShowAvailable}
        selectedOptions={selectedOptions}
        settingSelectedOptions={settingSelectedOptions}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      {isLoading && <Text>Loading...</Text>}
      {showData && (
        <DeviceList
          devices={devices}
          showAvailable={showAvailable}
          selectedOptions={selectedOptions}
          searchInput={searchInput}
        />
      )}
    </Container>
  )
}
export default Devices
