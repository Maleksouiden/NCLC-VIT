import React from 'react'
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material'

const NavbarBlock = ({ props, isSelected, onClick }) => {
  const {
    logo = 'Logo',
    links = [
      { text: 'Accueil', url: '#home' },
      { text: 'À propos', url: '#about' },
      { text: 'Contact', url: '#contact' }
    ],
    backgroundColor = '#ffffff',
    textColor = '#333333',
    position = 'static'
  } = props

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
      <AppBar
        position={position}
        elevation={0}
        sx={{
          backgroundColor,
          color: textColor,
          borderBottom: `1px solid ${textColor}20`
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              color: textColor
            }}
          >
            {logo}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {links.map((link, index) => (
              <Button
                key={index}
                href={link.url}
                sx={{
                  color: textColor,
                  textTransform: 'none',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: `${textColor}10`
                  }
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  // Si c'est une ancre locale, faire un scroll smooth
                  if (link.url && link.url.startsWith('#')) {
                    e.preventDefault()
                    const targetId = link.url.substring(1)
                    const targetElement = document.getElementById(targetId)
                    if (targetElement) {
                      targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      })
                    }
                  }
                }}
                title={link.url && link.url.startsWith('#') ? `Aller à la section ${link.url.substring(1)}` : undefined}
              >
                {link.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavbarBlock
