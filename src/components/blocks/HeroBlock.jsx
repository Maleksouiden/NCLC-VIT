import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material'

const HeroBlock = ({ props, isSelected, onClick }) => {
  const {
    title = 'Titre Principal',
    subtitle = 'Sous-titre descriptif',
    backgroundImage = '',
    backgroundColor = '#f5f5f5',
    textAlign = 'center',
    textColor = '#333333',
    buttonText = 'En savoir plus',
    buttonUrl = '#',
    showButton = true,
    padding = '80px 20px'
  } = props

  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {
        backgroundColor
      }

  return (
    <Box
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        border: isSelected ? '2px solid #00C4CC' : '2px solid transparent',
        borderRadius: 1,
        transition: 'all 0.2s ease',
        '&:hover': {
          border: '2px solid #00C4CC50'
        }
      }}
    >
      <Box
        sx={{
          ...backgroundStyle,
          padding,
          textAlign,
          color: textColor,
          position: 'relative',
          ...(backgroundImage && {
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.3)',
              zIndex: 1
            }
          })
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 3,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            component="p"
            gutterBottom
            sx={{
              mb: 4,
              opacity: 0.9,
              fontSize: { xs: '1.2rem', md: '1.5rem' }
            }}
          >
            {subtitle}
          </Typography>
          {showButton && buttonText && (
            <Button
              variant="contained"
              size="large"
              href={buttonUrl}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 'bold'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {buttonText}
            </Button>
          )}
        </Container>
      </Box>
    </Box>
  )
}

export default HeroBlock
