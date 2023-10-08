import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'

export const Profile = ({ img }: any) => {
  return (
    <div>
      <Avatar alt="Andres Valverde" src={img} sx={{ width: 72, height: 72 }} />
    </div>
  )
}
