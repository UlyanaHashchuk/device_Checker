import React from 'react'
import Device from '../Device'
import Container from './index.styled'

const DeviceList = ({
  devices,
  showAvailable,
  selectedOptions: { os: selectedOs, vendor: selectedVendor },
  searchInput,
}) => {
  let filteredDevices = devices

  if (showAvailable) {
    filteredDevices = filteredDevices.filter(({ borrowed }) => !borrowed)
  }

  if (selectedOs !== 'Nezáleží') {
    filteredDevices = filteredDevices.filter(
      ({ os }) => os && os.toLowerCase() === selectedOs.toLowerCase()
    )
  }

  if (selectedVendor !== 'Nezáleží') {
    filteredDevices = filteredDevices.filter(
      ({ vendor }) =>
        vendor && vendor.toLowerCase() === selectedVendor.toLowerCase()
    )
  }

  if (searchInput !== '') {
    filteredDevices = filteredDevices.filter(
      ({ model }) =>
        model && model.toLowerCase().includes(searchInput.toLowerCase())
    )
  }

  return (
    <Container>
      {filteredDevices.map((device) => (
        <Device key={device.id} device={device} />
      ))}
    </Container>
  )
}

export default DeviceList
