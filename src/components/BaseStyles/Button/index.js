import styled, { css } from 'styled-components'

const Button = styled.button`
  width: 100%;
  border: none;
  outline: none;
  color: white;
  font-size: 12px;
  font-weight: bold;
  background-color: #ff4d00;
  text-align: center;
  padding: 10px 5px;
  margin-top: 20px;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: grey;
    `}
  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        cursor: pointer;
        transition: 0.2s ease-in-out;
        background-color: #fc753a;
      }
    `}

    ${({ canReturn }) =>
    canReturn &&
    css`
      background-color: #ab51cf;

      &:hover {
        background-color: #cc6df2;
      }
    `}
`

export default Button
