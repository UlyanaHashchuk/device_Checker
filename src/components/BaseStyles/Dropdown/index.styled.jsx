import styled, { css } from 'styled-components'

const DropDownContainer = styled.div`
  box-sizing: border-box;
  width: 165px;
  position: relative;
  outline: none;

  @media only screen and (max-width: 770px) {
    width: 100%;
  }

  ${({ $fill }) =>
    $fill &&
    css`
      width: 100%;
    `}
`

const DropDownHeader = styled.div`
  padding: 10px;
  color: black;
  font-size: 14px;
  border-bottom: 1px solid #d6d4d2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DropDownList = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 40px;
  width: 154px;
  z-index: 1;
  margin-top: 5px;
  text-align: center;
  background: #ffffff;
  border: 1px solid #d6d4d2;
  color: #454545;

  &:last-child {
    padding-bottom: 0px;
  }

  @media only screen and (max-width: 770px) {
    width: 100%;
  }
`

const ListItem = styled.li`
  list-style: none;
  padding: 8px;
  font-size: 14px;

  &:hover {
    background-color: #d6d4d2;
  }
`

const Symbol = styled.span`
  color: #d6d4d2;
  font-size: 12px;
`

export { DropDownContainer, DropDownHeader, DropDownList, ListItem, Symbol }
