import React, { useState } from 'react'
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  ListItem,
  Symbol,
} from './index.styled'

const Dropdown = ({
  fill = false,
  options,
  selectedOption,
  setSelectedOption,
  defaultValue,
  optionKey,
}) => {
  const [isOpened, setIsOpened] = useState(false)

  const onTrigger = () => setIsOpened(!isOpened)

  const onOptionSelect = (value) => () => {
    setSelectedOption(value, optionKey)
    setIsOpened(false)
  }

  const onBlur = () => setIsOpened(false)

  return (
    <DropDownContainer onBlur={onBlur} tabIndex={0} $fill={fill}>
      <DropDownHeader onClick={onTrigger}>
        {selectedOption || defaultValue} <Symbol>{isOpened ? `▲` : `▼`}</Symbol>
      </DropDownHeader>
      {isOpened && (
        <DropDownList>
          {options.map(({ id, option }) => (
            <ListItem onClick={onOptionSelect(option)} key={id}>
              {option}
            </ListItem>
          ))}
        </DropDownList>
      )}
    </DropDownContainer>
  )
}

export default Dropdown
