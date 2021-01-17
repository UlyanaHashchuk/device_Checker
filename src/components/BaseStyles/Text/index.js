import styled, { css } from 'styled-components'

const Text = styled.p`
  margin-block-start: unset;
  margin-block-end: unset;
  font-size: 14px;

  ${({ $header }) =>
    $header &&
    css`
      font-size: 24px;
    `}
  ${({ $note }) =>
    $note &&
    css`
      font-size: 12px;
      color: grey;
    `}
  ${({ $small }) =>
    $small &&
    css`
      font-size: 10px;
    `}
`

export default Text
