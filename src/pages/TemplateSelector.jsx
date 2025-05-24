import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Fade
} from '@mui/material'
import { ArrowBack, DarkMode, LightMode } from '@mui/icons-material'
import { predefinedTemplates } from '../templates/predefinedTemplates'

const TemplateSelector = ({ onTemplateSelect, onBackClick, isDarkMode, toggleTheme }) => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onBackClick}
            sx={{ mr: 2, color: 'text.primary' }}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'text.primary' }}>
            Choisissez un template
          </Typography>
          <IconButton
            onClick={toggleTheme}
            sx={{ color: 'text.primary' }}
          >
            {isDarkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Fade in timeout={800}>
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" gutterBottom fontWeight="bold">
              Templates Disponibles
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Sélectionnez un template pour commencer votre création
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4}>
          {predefinedTemplates.map((template, index) => (
            <Grid item xs={12} sm={6} md={4} key={template.id}>
              <Fade in timeout={1000 + index * 200}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6
                    }
                  }}
                  onClick={() => onTemplateSelect(template)}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      height: 200,
                      bgcolor: 'grey.200',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `linear-gradient(135deg,
                        ${index % 4 === 0 ? '#00C4CC20' :
                          index % 4 === 1 ? '#2F80ED20' :
                          index % 4 === 2 ? '#FF647C20' : '#4CAF5020'} 0%,
                        ${index % 4 === 0 ? '#2F80ED20' :
                          index % 4 === 1 ? '#FF647C20' :
                          index % 4 === 2 ? '#4CAF5020' : '#00C4CC20'} 100%)`
                    }}
                  >
                    <Typography variant="h6" color="text.secondary">
                      Aperçu {template.name}
                    </Typography>
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography gutterBottom variant="h6" component="h2" fontWeight="bold">
                      {template.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, mb: 2 }}>
                      {template.description}
                    </Typography>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        mt: 'auto',
                        borderRadius: 2,
                        textTransform: 'none',
                        fontWeight: 'bold'
                      }}
                    >
                      Utiliser ce template
                    </Button>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        <Fade in timeout={1500}>
          <Box textAlign="center" mt={6}>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Vous pouvez aussi commencer avec un template vide
            </Typography>
            <Button
              variant="outlined"
              size="large"
              onClick={() => onTemplateSelect({
                id: 'blank',
                name: 'Template Vide',
                description: 'Commencez avec une page vierge',
                blocks: []
              })}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 'bold'
              }}
            >
              Commencer avec un template vide
            </Button>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

export default TemplateSelector
