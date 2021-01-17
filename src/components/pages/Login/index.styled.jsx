import styled from 'styled-components'
import { Text } from '../../BaseStyles'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  margin-top: 70px;
  background-color: white;
  border: 1px solid #d4d0cd;
  width: 500px;
  padding: 10px;

  & > ${Text}:nth-child(2) {
    margin-bottom: 30px;
  }
`

const Form = styled.form`
  & > ${Text} {
    margin-top: 10px;
  }
`

export { Container, Wrapper, Form }
