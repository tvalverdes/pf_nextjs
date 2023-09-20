import TextField from '@mui/material/TextField'

export const InputField = (props:{name: string, placeholder: string}) => {
  return (
    <TextField
      required
      fullWidth
      id="standard-required"
      label={props.name}
      placeholder={props.placeholder}
      variant="outlined"
    />
  )
}
