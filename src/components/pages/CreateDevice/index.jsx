import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import AuthContext from '../../../contexts/AuthContext'
import { SYSTEM_OPTIONS, VENDOR_OPTIONS } from '../../../constants'
import { addPhoneRequest } from '../../../api'
import { Text, Input, Button, Dropdown } from '../../BaseStyles'
import { Container, Wrapper, Form } from './index.styled'

const CreateDevice = () => {
  const {
    userInfo: { token },
  } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    code: '',
    model: '',
    vendor: '',
    os: '',
    osVersion: '',
    image: '',
  })
  const [submitStages, setSubmitStages] = useState('PŘIDAT ZAŘÍZENÍ')
  const [error, setError] = useState(null)
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const handleChange = (value, key) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (formData.vendor === '') {
      setError('Vyberte prosím Výrobce')
    } else if (formData.os === '') {
      setError('Vyberte prosím Operační systém')
    } else {
      setSubmitStages('Ukládání...')

      addPhoneRequest({
        token,
        formData,
      })
        .then(() => {
          setSubmitStages('Uložené!')
          setError(null)
          setShouldRedirect(true)
        })
        .catch(({ error }) => {
          setError(error)
        })
    }
  }

  if (shouldRedirect) {
    return <Redirect to="/devices" delay={3000} />
  }

  return (
    <Wrapper>
      <Container>
        <Text $header>Nové zařízení</Text>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Kódové označení(identifikátor)"
            value={formData.code}
            onChange={({ target: { value } }) => handleChange(value, 'code')}
            $fill
            required
          />
          <Dropdown
            defaultValue="Výrobce"
            options={VENDOR_OPTIONS}
            selectedOption={formData.vendor}
            setSelectedOption={handleChange}
            optionKey="vendor"
            fill
          />
          <Input
            type="text"
            placeholder="Model"
            value={formData.model}
            onChange={({ target: { value } }) => handleChange(value, 'model')}
            $fill
            required
          />
          <Dropdown
            defaultValue="Operační systém"
            options={SYSTEM_OPTIONS}
            selectedOption={formData.os}
            setSelectedOption={handleChange}
            optionKey="os"
            fill
          />
          <Input
            type="text"
            placeholder="Verze operačního systému"
            value={formData.osVersion}
            onChange={({ target: { value } }) =>
              handleChange(value, 'osVersion')
            }
            $fill
          />
          <Input
            type="text"
            placeholder="Obrázek(URL)"
            value={formData.image}
            onChange={({ target: { value } }) => handleChange(value, 'image')}
            $fill
          />
          {error && <Text>*{error}</Text>}
          <Button type="submit" disabled={submitStages !== 'PŘIDAT ZAŘÍZENÍ'}>
            {submitStages}
          </Button>
        </Form>
      </Container>
    </Wrapper>
  )
}

export default CreateDevice
