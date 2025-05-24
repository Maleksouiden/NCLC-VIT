import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material'

const CardBlock = ({ props, isSelected, onClick }) => {
  const {
    cards = [
      {
        title: 'Titre de la carte 1',
        content: 'Contenu de la première carte avec description détaillée.',
        image: 'https://via.placeholder.com/300x200?text=Image+1',
        buttonText: 'En savoir plus',
        buttonUrl: '#',
        showButton: true
      }
    ],
    cardsPerRow = 3,
    layout = 'vertical', // 'vertical' ou 'horizontal'
    padding = '20px',
    borderRadius = 8,
    boxShadow = 2,
    spacing = 3
  } = props

  const getGridSize = () => {
    switch (cardsPerRow) {
      case 1: return 12
      case 2: return 6
      case 3: return 4
      case 4: return 3
      case 6: return 2
      default: return 4
    }
  }

  const renderCard = (card, index) => {
    const isHorizontal = layout === 'horizontal'

    return (
      <Grid item xs={12} sm={getGridSize()} key={index}>
        <Card
          sx={{
            borderRadius: `${borderRadius}px`,
            boxShadow,
            display: isHorizontal ? 'flex' : 'block',
            height: '100%',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: boxShadow + 2
            }
          }}
        >
          {card.image && (
            <CardMedia
              component="img"
              sx={{
                height: isHorizontal ? 200 : 200,
                width: isHorizontal ? 300 : '100%',
                objectFit: 'cover'
              }}
              image={card.image}
              alt={card.title}
            />
          )}
          <CardContent
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Typography gutterBottom variant="h6" component="h3" fontWeight="bold">
              {card.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ flexGrow: 1, mb: 2 }}
            >
              {card.content}
            </Typography>
            {card.showButton && card.buttonText && (
              <Button
                variant="contained"
                href={card.buttonUrl}
                sx={{
                  mt: 'auto',
                  alignSelf: 'flex-start',
                  textTransform: 'none',
                  fontWeight: 'bold'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {card.buttonText}
              </Button>
            )}
          </CardContent>
        </Card>
      </Grid>
    )
  }

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
      <Grid container spacing={spacing}>
        {cards.map((card, index) => renderCard(card, index))}
      </Grid>
    </Box>
  )
}

export default CardBlock
