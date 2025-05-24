import React from 'react'
import { Box, Button } from '@mui/material'

const ButtonBlock = ({ props, isSelected, onClick }) => {
  const {
    text = 'Bouton',
    url = '#',
    variant = 'contained',
    color = 'primary',
    size = 'medium',
    textAlign = 'center',
    padding = '20px',
    borderRadius = 8,
    customColor = null,
    customTextColor = null
  } = props

  const buttonStyle = {
    borderRadius: `${borderRadius}px`,
    textTransform: 'none',
    fontWeight: 'bold',
    ...(customColor && {
      backgroundColor: customColor,
      '&:hover': {
        backgroundColor: customColor + 'dd'
      }
    }),
    ...(customTextColor && {
      color: customTextColor
    })
  }

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
      <Button
        variant={variant}
        color={color}
        size={size}
        href={url}
        sx={buttonStyle}
        onClick={(e) => e.stopPropagation()}
      >
        {text}
      </Button>
    </Box>
  )
}

export default ButtonBlock
