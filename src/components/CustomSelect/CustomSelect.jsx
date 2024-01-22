import Select, {components} from 'react-select'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
import React from 'react'
import {Controller} from 'react-hook-form'
import {StyledSelect} from './CustomSelect.styled.jsx'

const selectStyle = {
  valueContainer: styles => ({
    ...styles,
    padding: '14px 0 14px 18px'
  }),
  input: styles => ({
    ...styles,
    padding: '0',
    margin: '0',
    color: '#121417',
    fontSize: '18px',
    fontWeight: 500,
    height: '20px',
    lineHeight: '1.11'
  }),
  control: styles => ({
    ...styles,
    backgroundColor: '#F7F7FB',
    border: 'none',
    outline: 'none',
    borderRadius: '14px',
    boxShadow: 'none',
    cursor: 'pointer',
/*    width: '224px',*/

    '&:hover': {
      border: 'none'
    }
  }),
  singleValue: styles => ({
    ...styles,
    color: '#121417',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '1.11',
    padding: '0',
    margin: '0'
  }),
  placeholder: styles => ({
    ...styles,
    color: '#121417',
    fontSize: '18px',
    padding: '0',
    fontWeight: 500,
    lineHeight: '1.11',
    margin: '0'
  }),
  dropdownIndicator: styles => ({
    ...styles,
    paddingRight: '18px'
  }),
  menu: styles => ({
    ...styles,
    borderRadius: '14px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
    color: '#12141733',
    fontSize: '16px',
    fontWeight: '500',
    overflow: 'hidden',
    marginTop: '4px',
    zIndex: '10'
  }),
  option: (styles, {isFocused, isSelected}) => {
    if (isFocused) {
      return {
        ...styles,
        padding: '3px 18px',
        color: '#121417'
      }
    } else if (isSelected) {
      return {
        ...styles,
        color: '#121417',
        padding: '3px 18px',
        background: 'transparent'
      }
    } else {
      return {
        ...styles,
        padding: '3px 18px'
      }
    }
  },
  menuList: base => ({
    ...base,
    padding: '14px 0',
    '&::-webkit-scrollbar': {
      width: '8px'
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent'
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#1214170D',
      borderRadius: '10px'
    }
  })
}

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      {props.selectProps.menuIsOpen ? (
        <MdKeyboardArrowUp color='#121417' size={20} label='Arrow up'/>
      ) : (
        <MdKeyboardArrowDown color='#121417' size={20} label='Arrow down'/>
      )}
    </components.DropdownIndicator>
  )
}


function CustomSelect({control, name, dataset, width, placeholder = ''}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({field, value}) => (
        <StyledSelect
          $width={width}
          id={name}
          options={dataset}
          components={{
            DropdownIndicator,
            IndicatorSeparator: () => null
          }}
          placeholder={placeholder}
          styles={selectStyle}
          isSearchable={true}
          value={dataset.find(
            brand => brand.value === value
          )}
          onChange={option => field.onChange(option.value)}
        />
      )}
    />
  )
}

export default CustomSelect