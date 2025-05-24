import React from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Fade,
  useTheme,
  IconButton,
  Tooltip
} from '@mui/material'
import {
  Rocket,
  Palette,
  Speed,
  TouchApp,
  DarkMode,
  LightMode
} from '@mui/icons-material'

const LandingPage = ({ onStartClick, isDarkMode, toggleTheme }) => {
  const theme = useTheme()

  const features = [
    {
      icon: <Rocket sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Création Rapide',
      description: 'Créez votre site en quelques clics avec nos templates prêts à l\'emploi'
    },
    {
      icon: <Palette sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      title: 'Personnalisation',
      description: 'Personnalisez chaque élément selon vos besoins et votre style'
    },
    {
      icon: <TouchApp sx={{ fontSize: 40, color: theme.palette.error.main }} />,
      title: 'Glisser-Déposer',
      description: 'Interface intuitive avec système de drag & drop'
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Export Instantané',
      description: 'Exportez votre création en HTML/CSS/JSON en un clic'
    }
  ]

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, ${theme.palette.secondary.main}20 100%)`,
        display: 'flex',
        alignItems: 'center',
        py: 4,
        position: 'relative'
      }}
    >
      {/* Bouton de basculement de thème */}
      <Box sx={{ position: 'absolute', top: 20, right: 20 }}>
        <Tooltip title={isDarkMode ? 'Mode clair' : 'Mode sombre'}>
          <IconButton
            onClick={toggleTheme}
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 2,
              '&:hover': {
                boxShadow: 4
              }
            }}
          >
            {isDarkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Tooltip>
      </Box>

      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 3
              }}
            >
              Template Builder
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              gutterBottom
              sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}
            >
              Créez votre site web en quelques clics avec notre éditeur visuel intuitif
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={onStartClick}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                borderRadius: 3,
                boxShadow: 3,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Commencer
            </Button>
          </Box>
        </Fade>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Fade in timeout={1000 + index * 200}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box mb={2}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default LandingPage
