import styled, { css } from 'styled-components'

const Input = styled.input`
  box-sizing: border-box;
  padding: 10px;
  margin: 8px 0;
  border: none;
  border-bottom: 1px solid #d6d4d2;
  outline: none;

  ${({ $fill }) =>
    $fill &&
    css`
      width: 100%;
    `}
  ${({ $transparent }) =>
    $transparent &&
    css`
      background-color: transparent;
    `}
`

export default Input
