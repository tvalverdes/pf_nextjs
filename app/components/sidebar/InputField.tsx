import TextField from '@mui/material/TextField'

export const InputField = () => {
  return (
    <TextField
      required
      fullWidth
      id="standard-required"
      label="Nombre"
      placeholder="Nombre Completo"
      variant="outlined"
    />
  )
}
