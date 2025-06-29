import React from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'

const FormBlock = ({ props, isSelected, onClick }) => {
  const {
    title = 'Contactez-nous',
    fields = [
      { id: 1, type: 'text', label: 'Nom', placeholder: 'Votre nom', required: true },
      { id: 2, type: 'email', label: 'Email', placeholder: 'votre@email.com', required: true },
      { id: 3, type: 'tel', label: 'Téléphone', placeholder: '+33 1 23 45 67 89', required: false },
      { id: 4, type: 'textarea', label: 'Message', placeholder: 'Votre message...', required: true }
    ],
    buttonText = 'Envoyer',
    buttonColor = 'primary',
    padding = '40px 20px',
    backgroundColor = '#ffffff',
    borderRadius = 8
  } = props

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // Empêcher la soumission réelle du formulaire en mode éditeur
    alert('Formulaire soumis ! (Mode démo)')
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
      <Box
        sx={{
          backgroundColor,
          borderRadius: `${borderRadius}px`,
          p: 3,
          maxWidth: 600,
          mx: 'auto'
        }}
      >
        {title && (
          <Typography variant="h5" gutterBottom fontWeight="bold" textAlign="center">
            {title}
          </Typography>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 2 }}
          onClick={(e) => e.stopPropagation()}
        >
          {fields.map((field, index) => (
            <TextField
              key={field.id || index}
              fullWidth
              type={field.type === 'textarea' ? 'text' : field.type}
              label={field.label}
              placeholder={field.placeholder}
              required={field.required}
              multiline={field.type === 'textarea'}
              rows={field.type === 'textarea' ? 4 : 1}
              sx={{ mb: 2 }}
              variant="outlined"
            />
          ))}

          <Button
            type="submit"
            variant="contained"
            color={buttonColor}
            size="large"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              fontWeight: 'bold',
              textTransform: 'none'
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default FormBlock
