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
  width: 550px;
  padding: 10px;

  & > ${Text} {
    margin-bottom: 30px;
  }
`

const Form = styled.form`
  & > ${Text} {
    margin-top: 10px;
  }

  & > div {
    margin-top: 20px;
  }
`

export { Container, Wrapper, Form }
