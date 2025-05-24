import React from 'react'
import { Box, Typography } from '@mui/material'

const MapBlock = ({ props, isSelected, onClick }) => {
  const {
    address = 'Paris, France',
    zoom = 15,
    width = '100%',
    height = '400px',
    padding = '20px',
    borderRadius = 8,
    showTitle = true,
    title = 'Notre localisation'
  } = props

  // Générer l'URL Google Maps embed
  const getMapUrl = () => {
    const encodedAddress = encodeURIComponent(address)
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgHz-EY&q=${encodedAddress}&zoom=${zoom}`
  }

  // URL alternative sans clé API (utilise Google Maps en mode recherche)
  const getMapUrlAlternative = () => {
    const encodedAddress = encodeURIComponent(address)
    return `https://maps.google.com/maps?q=${encodedAddress}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`
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
      {showTitle && title && (
        <Typography 
          variant="h5" 
          gutterBottom 
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 3 }}
        >
          {title}
        </Typography>
      )}
      
      <Box
        sx={{
          borderRadius: `${borderRadius}px`,
          overflow: 'hidden',
          boxShadow: 2,
          position: 'relative'
        }}
      >
        <iframe
          src={getMapUrlAlternative()}
          width={width}
          height={height}
          style={{
            border: 0,
            display: 'block',
            width: '100%'
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Carte de ${address}`}
        />
        
        {/* Overlay pour éviter l'interaction en mode édition */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'transparent',
            cursor: 'pointer',
            zIndex: 1
          }}
          onClick={(e) => {
            e.stopPropagation()
            onClick()
          }}
        />
      </Box>
      
      <Typography 
        variant="body2" 
        color="text.secondary" 
        textAlign="center"
        sx={{ mt: 2 }}
      >
        📍 {address}
      </Typography>
    </Box>
  )
}

export default MapBlock
