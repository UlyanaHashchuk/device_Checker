import React from 'react'
import SearchIcon from '../../../../icons/search.png'
import { SYSTEM_OPTIONS, VENDOR_OPTIONS } from '../../../../constants'
import { Input, Text, Dropdown } from '../../../BaseStyles'
import {
  Container,
  OptionsContainer,
  DropdownContainer,
  CheckboxLabel,
  SearchContainer,
} from './index.styled'

const DEFAULT_OPTION = { id: 0, option: 'Nezáleží' }

const searchSystemOptions = SYSTEM_OPTIONS.concat(DEFAULT_OPTION)
const searchVendorOptions = VENDOR_OPTIONS.concat(DEFAULT_OPTION)

const SearchFilters = ({
  setShowAvailable,
  showAvailable,
  selectedOptions,
  settingSelectedOptions,
  searchInput,
  setSearchInput,
}) => (
  <Container>
    <OptionsContainer>
      <DropdownContainer>
        <Text $note $small>
          SYSTÉM
        </Text>
        <Dropdown
          options={searchSystemOptions}
          selectedOption={selectedOptions.os}
          setSelectedOption={settingSelectedOptions}
          optionKey="os"
        />
      </DropdownContainer>
      <DropdownContainer>
        <Text $note $small>
          VÝROBCE
        </Text>
        <Dropdown
          options={searchVendorOptions}
          selectedOption={selectedOptions.vendor}
          setSelectedOption={settingSelectedOptions}
          optionKey="vendor"
        />
      </DropdownContainer>
      <CheckboxLabel>
        <Input
          type="checkbox"
          checked={showAvailable}
          onChange={() => setShowAvailable(!showAvailable)}
        />
        Jen dostupné
      </CheckboxLabel>
    </OptionsContainer>
    <SearchContainer>
      <img src={SearchIcon} height="16px" alt="search" />
      <Input
        type="text"
        placeholder="Hledat model"
        value={searchInput}
        onChange={({ target: { value } }) => setSearchInput(value)}
        $transparent
        $fill
      />
    </SearchContainer>
  </Container>
)

export default SearchFilters
