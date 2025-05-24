import React from 'react'
import { Box } from '@mui/material'

const ImageBlock = ({ props, isSelected, onClick }) => {
  const {
    src = 'https://via.placeholder.com/400x200?text=Image',
    alt = 'Image',
    width = '100%',
    height = 'auto',
    borderRadius = 0,
    border = 'none',
    boxShadow = 'none',
    textAlign = 'center',
    padding = '20px'
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
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width,
          height,
          borderRadius: `${borderRadius}px`,
          border,
          boxShadow,
          maxWidth: '100%',
          display: 'block',
          margin: textAlign === 'center' ? '0 auto' : textAlign === 'right' ? '0 0 0 auto' : '0'
        }}
      />
    </Box>
  )
}

export default ImageBlock
