import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, SvgIcon, SvgIconProps } from '@mui/material'

export const CardBenefit = (props: {
  title: string
  description: string
  icon: any
}) => {
  return (
    <div className="w-full flex justify-center items-center">
      <Card
        className="h-full text-center md:py-3 xl:pt-10 shadow-xl"
        sx={{
          maxWidth: 276,
          maxHeight: 320,
          bgcolor: '#FCFCFC',
        }}
      >
        <CardActionArea>
          {props.icon}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography
              className="font-normal"
              variant="body2"
              color="text.secondary"
            >
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}
