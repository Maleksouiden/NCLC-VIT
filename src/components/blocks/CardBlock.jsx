import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material'

const CardBlock = ({ props, isSelected, onClick }) => {
  const {
    title = 'Titre de la carte',
    content = 'Contenu de la carte avec description détaillée.',
    image = 'https://via.placeholder.com/300x200?text=Image',
    buttonText = 'En savoir plus',
    buttonUrl = '#',
    showButton = true,
    layout = 'vertical', // 'vertical' ou 'horizontal'
    padding = '20px',
    borderRadius = 8,
    boxShadow = 2
  } = props

  const isHorizontal = layout === 'horizontal'

  return (
    <Box
      onClick={onClick}
      sx={{
        padding,
        cursor: 'pointer',
        border: isSelected ? '2px solid #00C4CC' : '2px solid transparent',
        borderRadius: 1,
        transition: 'all 0.2s ease',
        '&:hover': {
          border: '2px solid #00C4CC50'
        }
      }}
    >
      <Card
        sx={{
          borderRadius: `${borderRadius}px`,
          boxShadow,
          display: isHorizontal ? 'flex' : 'block',
          height: '100%'
        }}
      >
        {image && (
          <CardMedia
            component="img"
            sx={{
              height: isHorizontal ? 200 : 200,
              width: isHorizontal ? 300 : '100%',
              objectFit: 'cover'
            }}
            image={image}
            alt={title}
          />
        )}
        <CardContent
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography gutterBottom variant="h5" component="h2" fontWeight="bold">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ flexGrow: 1, mb: 2 }}
          >
            {content}
          </Typography>
          {showButton && buttonText && (
            <Button
              variant="contained"
              href={buttonUrl}
              sx={{
                mt: 'auto',
                alignSelf: 'flex-start',
                textTransform: 'none',
                fontWeight: 'bold'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {buttonText}
            </Button>
          )}
        </CardContent>
      </Card>
    </Box>
  )
}

export default CardBlock
