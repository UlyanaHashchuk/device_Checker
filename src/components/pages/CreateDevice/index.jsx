import React, { useState } from 'react'
import {
  SYSTEM_OPTIONS,
  VENDOR_OPTIONS,
  AUTHENTICATION,
} from '../../../constants'
import { Text, Input, Button, Dropdown } from '../../BaseStyles'
import { Container, Wrapper, Form } from './index.styled'
import useCreateDevice from '../../../hooks/useCreateDevice'

const CreateDevice = () => {
  const { handleSubmit, formData, setFormData, error } = useCreateDevice()
  const [submitStages, setSubmitStages] = useState(
    AUTHENTICATION.unauthenticated
  )

  const handleChange = (value, key) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  return (
    <Wrapper>
      <Container>
        <Text $header>Nové zařízení</Text>
        <Form onSubmit={(event) => handleSubmit(event, setSubmitStages)}>
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
          <Button
            type="submit"
            disabled={submitStages !== AUTHENTICATION.unauthenticated}
          >
            {submitStages === AUTHENTICATION.unauthenticated &&
              'PŘIDAT ZAŘÍZENÍ'}
            {submitStages === AUTHENTICATION.authenticating && 'Ukládání...'}
            {submitStages === AUTHENTICATION.authenticated && 'Uložené!'}
          </Button>
        </Form>
      </Container>
    </Wrapper>
  )
}

export default CreateDevice
