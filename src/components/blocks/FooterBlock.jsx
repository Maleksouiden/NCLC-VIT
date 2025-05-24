import React from 'react'
import { Box, Typography, IconButton, Container } from '@mui/material'
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'

const FooterBlock = ({ props, isSelected, onClick }) => {
  const {
    text = '© 2024 Mon Site. Tous droits réservés.',
    backgroundColor = '#333333',
    textColor = '#ffffff',
    socialLinks = [],
    showSocial = true,
    padding = '40px 20px',
    textAlign = 'center'
  } = props

  const socialIcons = {
    facebook: <Facebook />,
    twitter: <Twitter />,
    instagram: <Instagram />,
    linkedin: <LinkedIn />
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
          backgroundColor,
          color: textColor,
          padding,
          textAlign
        }}
      >
        <Container maxWidth="lg">
          {showSocial && socialLinks.length > 0 && (
            <Box sx={{ mb: 2 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  sx={{
                    color: textColor,
                    mx: 1,
                    '&:hover': {
                      backgroundColor: `${textColor}20`
                    }
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {socialIcons[social.platform] || <Facebook />}
                </IconButton>
              ))}
            </Box>
          )}
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            {text}
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default FooterBlock
