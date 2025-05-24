import React from 'react'
import { Box, Typography } from '@mui/material'

const TextBlock = ({ props, isSelected, onClick }) => {
  const {
    content = 'Votre texte ici',
    fontSize = 16,
    textAlign = 'left',
    color = '#000000',
    padding = '20px',
    fontWeight = 'normal',
    fontStyle = 'normal',
    textDecoration = 'none',
    fontFamily = 'Roboto, Arial, sans-serif'
  } = props

  return (
    <Box
      onClick={onClick}
      sx={{
        padding,
        textAlign,
        cursor: 'pointer',
        border: isSelected ? '2px solid #00C4CC' : '2px solid transparent',
        borderRadius: 1,
        transition: 'all 0.2s ease',
        '&:hover': {
          border: '2px solid #00C4CC50'
        }
      }}
    >
      <Typography
        sx={{
          fontSize: `${fontSize}px`,
          color,
          fontWeight,
          fontStyle,
          textDecoration,
          fontFamily,
          lineHeight: 1.6
        }}
      >
        {content}
      </Typography>
    </Box>
  )
}

export default TextBlock
