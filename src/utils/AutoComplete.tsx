import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import React from 'react'

export const SingleAutoComplete = ({data, classStyles, setValue, value}) => {
    function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const [inputValue, setInputValue] = React.useState('')
    return (
      <Autocomplete
          value={value}
          onChange={(event: any, newValue: {value: any, label: any}) => {
            setValue(newValue?.value)
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={data}
            getOptionLabel={(option) => option.label}
              getOptionSelected={(option, value) => option?.value === value?.value}
        renderInput={(params) => <TextField {...params} placeholder="Select Course" variant="standard" className={classStyles} />}
        
        />
      // <Autocomplete
        
      //     value={value}
      //   onChange={(event: any, newValue: {value: any, label: any}) => {
      //       console.log(newValue, value)
      //       setValue(newValue?.value);
      //   }}
      //   id="controllable-states-demo"
      //   inputValue={inputValue}
      //   getOptionSelected={(option, value) => option.value === value.value}
      //   getOptionLabel={(option) => option.label}
      //     onInputChange={(event, newInputValue) => {
      //       setInputValue(newInputValue);
      //     }}
      //     options={data}
      //     renderInput={(params) => <TextField {...params} variant="outlined" className={classStyles} />}
      //   />
    )
  }