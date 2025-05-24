import React from 'react'
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider
} from '@mui/material'
import {
  TextFields,
  Image,
  TouchApp,
  Navigation,
  ViewCarousel,
  CreditCard,
  Web,
  VideoLibrary,
  ContactMail,
  Map
} from '@mui/icons-material'
import { v4 as uuidv4 } from 'uuid'

const BlockPalette = ({ onAddBlock }) => {
  const blockTypes = [
    {
      type: 'text',
      name: 'Texte',
      icon: <TextFields />,
      description: 'Bloc de texte personnalisable',
      defaultProps: {
        content: 'Votre texte ici',
        fontSize: 16,
        textAlign: 'left',
        color: '#000000',
        padding: '20px'
      }
    },
    {
      type: 'image',
      name: 'Image',
      icon: <Image />,
      description: 'Image avec options de style',
      defaultProps: {
        src: 'https://via.placeholder.com/400x200?text=Image',
        alt: 'Image',
        width: '100%',
        height: 'auto',
        borderRadius: 0,
        textAlign: 'center',
        padding: '20px'
      }
    },
    {
      type: 'button',
      name: 'Bouton',
      icon: <TouchApp />,
      description: 'Bouton d\'action personnalisable',
      defaultProps: {
        text: 'Bouton',
        url: '#',
        variant: 'contained',
        color: 'primary',
        size: 'medium',
        textAlign: 'center',
        padding: '20px'
      }
    },
    {
      type: 'navbar',
      name: 'Navigation',
      icon: <Navigation />,
      description: 'Barre de navigation',
      defaultProps: {
        logo: 'Logo',
        links: [
          { text: 'Accueil', url: '#home' },
          { text: 'À propos', url: '#about' },
          { text: 'Contact', url: '#contact' }
        ],
        backgroundColor: '#ffffff',
        textColor: '#333333'
      }
    },
    {
      type: 'hero',
      name: 'Hero Section',
      icon: <ViewCarousel />,
      description: 'Section hero avec titre et CTA',
      defaultProps: {
        title: 'Titre Principal',
        subtitle: 'Sous-titre descriptif',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        textColor: '#333333',
        buttonText: 'En savoir plus',
        showButton: true
      }
    },
    {
      type: 'card',
      name: 'Cartes',
      icon: <CreditCard />,
      description: 'Grille de cartes personnalisables',
      defaultProps: {
        cards: [
          {
            title: 'Première carte',
            content: 'Contenu de la première carte avec description détaillée.',
            image: 'https://via.placeholder.com/300x200?text=Image+1',
            buttonText: 'En savoir plus',
            buttonUrl: '#',
            showButton: true
          },
          {
            title: 'Deuxième carte',
            content: 'Contenu de la deuxième carte avec description détaillée.',
            image: 'https://via.placeholder.com/300x200?text=Image+2',
            buttonText: 'Découvrir',
            buttonUrl: '#',
            showButton: true
          },
          {
            title: 'Troisième carte',
            content: 'Contenu de la troisième carte avec description détaillée.',
            image: 'https://via.placeholder.com/300x200?text=Image+3',
            buttonText: 'Voir plus',
            buttonUrl: '#',
            showButton: true
          }
        ],
        cardsPerRow: 3,
        layout: 'vertical',
        spacing: 3
      }
    },
    {
      type: 'footer',
      name: 'Pied de page',
      icon: <Web />,
      description: 'Pied de page avec liens sociaux',
      defaultProps: {
        text: '© 2024 Mon Site. Tous droits réservés.',
        backgroundColor: '#333333',
        textColor: '#ffffff',
        socialLinks: [],
        showSocial: true
      }
    },
    {
      type: 'video',
      name: 'Vidéo',
      icon: <VideoLibrary />,
      description: 'Vidéo YouTube ou autre',
      defaultProps: {
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        width: '100%',
        height: '315',
        autoplay: false,
        controls: true,
        textAlign: 'center',
        padding: '20px'
      }
    },
    {
      type: 'form',
      name: 'Formulaire',
      icon: <ContactMail />,
      description: 'Formulaire de contact',
      defaultProps: {
        title: 'Contactez-nous',
        fields: [
          { id: 1, type: 'text', label: 'Nom', placeholder: 'Votre nom', required: true },
          { id: 2, type: 'email', label: 'Email', placeholder: 'votre@email.com', required: true },
          { id: 3, type: 'tel', label: 'Téléphone', placeholder: '+33 1 23 45 67 89', required: false },
          { id: 4, type: 'textarea', label: 'Message', placeholder: 'Votre message...', required: true }
        ],
        buttonText: 'Envoyer',
        buttonColor: 'primary',
        padding: '40px 20px'
      }
    },
    {
      type: 'map',
      name: 'Carte',
      icon: <Map />,
      description: 'Carte Google Maps intégrée',
      defaultProps: {
        title: 'Notre localisation',
        address: 'Paris, France',
        zoom: 15,
        width: '100%',
        height: '400px',
        padding: '20px',
        borderRadius: 8,
        showTitle: true
      }
    }
  ]

  const handleAddBlock = (blockType) => {
    const newBlock = {
      id: uuidv4(),
      type: blockType.type,
      props: { ...blockType.defaultProps }
    }
    onAddBlock(newBlock)
  }

  return (
    <Paper
      elevation={2}
      sx={{
        width: 280,
        height: '100%',
        overflow: 'auto',
        borderRadius: 2
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Blocs Disponibles
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Glissez ou cliquez pour ajouter
        </Typography>
      </Box>

      <Divider />

      <List sx={{ p: 0 }}>
        {blockTypes.map((blockType, index) => (
          <ListItem
            key={blockType.type}
            button
            onClick={() => handleAddBlock(blockType)}
            sx={{
              py: 2,
              px: 2,
              borderBottom: index < blockTypes.length - 1 ? '1px solid' : 'none',
              borderColor: 'divider',
              '&:hover': {
                backgroundColor: 'action.hover'
              }
            }}
          >
            <ListItemIcon sx={{ color: 'primary.main' }}>
              {blockType.icon}
            </ListItemIcon>
            <ListItemText
              primary={blockType.name}
              secondary={blockType.description}
              primaryTypographyProps={{
                fontWeight: 'medium'
              }}
              secondaryTypographyProps={{
                fontSize: '0.75rem'
              }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default BlockPalette
