import styled from 'styled-components'
import { Flex, Text } from '../../../BaseStyles'

const Container = styled(Flex)`
  justify-content: space-between;
  margin-bottom: 35px;
  padding: 0 12px;

  @media only screen and (max-width: 770px) {
    flex-direction: column;
    margin-bottom: 15px;
    padding: 0;
  }
`

const DropdownContainer = styled.div`
  margin-right: 20px;

  & > ${Text}:first-child {
    margin-bottom: 8px;
  }

  @media only screen and (max-width: 770px) {
    margin-right: unset;
    width: 280px;
  }
`

const OptionsContainer = styled(Flex)`
  @media only screen and (max-width: 770px) {
    flex-direction: column;

    & > ${DropdownContainer}:nth-child(2) {
      margin: 16px 0;
    }
  }
`

const CheckboxLabel = styled.label`
  color: #454545;

  & > input {
    margin-right: 10px;
  }

  &:hover,
  & > input:hover {
    cursor: pointer;
  }
`

const SearchContainer = styled(Flex)`
  width: 280px;
`

export {
  Container,
  OptionsContainer,
  DropdownContainer,
  CheckboxLabel,
  SearchContainer,
}
