import React, { useState, useContext } from 'react'
import AuthContext from '../../../contexts/AuthContext'
import { loginRequest } from '../../../api'
import { Text, Input, Button } from '../../BaseStyles'
import { Container, Wrapper, Form } from './index.styled'

const Login = () => {
  const [inputLogin, setInputLogin] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [error, setError] = useState(null)
  const { saveUserInfo } = useContext(AuthContext)

  const handleFormSubmit = (event) => {
    event.preventDefault()

    loginRequest({
      login: inputLogin,
      password: inputPassword,
    })
      .then((data) => {
        setError(null)
        saveUserInfo(data)
      })
      .catch(({ error }) => {
        setError(error)
      })
  }

  return (
    <Wrapper>
      <Container>
        <Text $header>Přihlášení</Text>
        <Text $note>
          Po přihlášení si budeš moct půjčit telefon, připadne vložit nový do
          seznamu.
        </Text>
        <Form onSubmit={handleFormSubmit}>
          <Input
            type="text"
            placeholder="Přihlašovací jméno"
            value={inputLogin}
            onChange={({ target: { value } }) => setInputLogin(value)}
            $fill
          />
          <Input
            type="password"
            placeholder="Heslo"
            value={inputPassword}
            onChange={({ target: { value } }) => setInputPassword(value)}
            $fill
          />
          {error && <Text>*{error}</Text>}
          <Button type="submit">PŘIHLÁSIT SE</Button>
        </Form>
      </Container>
    </Wrapper>
  )
}

export default Login
