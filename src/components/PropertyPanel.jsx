import React, { useState } from 'react'
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
  FormControlLabel,
  Paper,
  Divider,
  Slider,
  Button,
  IconButton,
  Grid,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material'
import {
  Delete,
  ColorLens,
  Add,
  ExpandMore,
  Palette,
  FontDownload
} from '@mui/icons-material'
import { colorPalettes, fontFamilies } from '../utils/colorPalettes'

const PropertyPanel = ({ selectedBlock, onUpdateBlock, onDeleteBlock }) => {
  const [showColorPalettes, setShowColorPalettes] = useState(false)

  if (!selectedBlock) {
    return (
      <Paper
        elevation={2}
        sx={{
          width: 320,
          height: '100%',
          p: 3,
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography color="text.secondary" textAlign="center">
          Sélectionnez un bloc pour modifier ses propriétés
        </Typography>
      </Paper>
    )
  }

  const handlePropertyChange = (property, value) => {
    const updatedBlock = {
      ...selectedBlock,
      props: {
        ...selectedBlock.props,
        [property]: value
      }
    }
    onUpdateBlock(updatedBlock)
  }

  const renderColorPalettes = () => (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Palette />
          <Typography>Palettes de couleurs</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          {colorPalettes.map((palette, index) => (
            <Grid item xs={12} key={index}>
              <Typography variant="body2" gutterBottom>
                {palette.name}
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5, mb: 1 }}>
                {palette.colors.map((color, colorIndex) => (
                  <Box
                    key={colorIndex}
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: color,
                      borderRadius: 1,
                      cursor: 'pointer',
                      border: '1px solid #ddd',
                      '&:hover': {
                        transform: 'scale(1.1)'
                      }
                    }}
                    onClick={() => handlePropertyChange('color', color)}
                    title={color}
                  />
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  )

  const renderFontSelector = () => (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FontDownload />
          <Typography>Polices</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl fullWidth>
          <InputLabel>Police</InputLabel>
          <Select
            value={selectedBlock.props.fontFamily || 'Roboto, Arial, sans-serif'}
            onChange={(e) => handlePropertyChange('fontFamily', e.target.value)}
          >
            {fontFamilies.map((font, index) => (
              <MenuItem key={index} value={font.value} sx={{ fontFamily: font.value }}>
                {font.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  )

  const renderCommonProperties = () => (
    <>
      <TextField
        fullWidth
        label="ID de section (pour navigation)"
        value={selectedBlock.props.sectionId || ''}
        onChange={(e) => handlePropertyChange('sectionId', e.target.value)}
        sx={{ mb: 2 }}
        helperText="Ex: about, contact, services (sans #)"
      />
      <Divider sx={{ my: 2 }} />
    </>
  )

  const renderTextProperties = () => (
    <>
      {renderCommonProperties()}
      <TextField
        fullWidth
        label="Contenu"
        multiline
        rows={3}
        value={selectedBlock.props.content || ''}
        onChange={(e) => handlePropertyChange('content', e.target.value)}
        sx={{ mb: 2 }}
      />
      <Box sx={{ mb: 2 }}>
        <Typography gutterBottom>Taille de police: {selectedBlock.props.fontSize || 16}px</Typography>
        <Slider
          value={selectedBlock.props.fontSize || 16}
          onChange={(e, value) => handlePropertyChange('fontSize', value)}
          min={10}
          max={48}
          step={1}
        />
      </Box>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Alignement</InputLabel>
        <Select
          value={selectedBlock.props.textAlign || 'left'}
          onChange={(e) => handlePropertyChange('textAlign', e.target.value)}
        >
          <MenuItem value="left">Gauche</MenuItem>
          <MenuItem value="center">Centre</MenuItem>
          <MenuItem value="right">Droite</MenuItem>
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Couleur"
        type="color"
        value={selectedBlock.props.color || '#000000'}
        onChange={(e) => handlePropertyChange('color', e.target.value)}
        sx={{ mb: 2 }}
      />
      {renderColorPalettes()}
      {renderFontSelector()}
    </>
  )

  const renderImageProperties = () => (
    <>
      <TextField
        fullWidth
        label="URL de l'image"
        value={selectedBlock.props.src || ''}
        onChange={(e) => handlePropertyChange('src', e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Texte alternatif"
        value={selectedBlock.props.alt || ''}
        onChange={(e) => handlePropertyChange('alt', e.target.value)}
        sx={{ mb: 2 }}
      />
      <Box sx={{ mb: 2 }}>
        <Typography gutterBottom>Bordure arrondie: {selectedBlock.props.borderRadius || 0}px</Typography>
        <Slider
          value={selectedBlock.props.borderRadius || 0}
          onChange={(e, value) => handlePropertyChange('borderRadius', value)}
          min={0}
          max={50}
          step={1}
        />
      </Box>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Alignement</InputLabel>
        <Select
          value={selectedBlock.props.textAlign || 'center'}
          onChange={(e) => handlePropertyChange('textAlign', e.target.value)}
        >
          <MenuItem value="left">Gauche</MenuItem>
          <MenuItem value="center">Centre</MenuItem>
          <MenuItem value="right">Droite</MenuItem>
        </Select>
      </FormControl>
    </>
  )

  const renderButtonProperties = () => (
    <>
      <TextField
        fullWidth
        label="Texte du bouton"
        value={selectedBlock.props.text || ''}
        onChange={(e) => handlePropertyChange('text', e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="URL de destination"
        value={selectedBlock.props.url || ''}
        onChange={(e) => handlePropertyChange('url', e.target.value)}
        sx={{ mb: 2 }}
      />
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Style</InputLabel>
        <Select
          value={selectedBlock.props.variant || 'contained'}
          onChange={(e) => handlePropertyChange('variant', e.target.value)}
        >
          <MenuItem value="contained">Plein</MenuItem>
          <MenuItem value="outlined">Contour</MenuItem>
          <MenuItem value="text">Texte</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Taille</InputLabel>
        <Select
          value={selectedBlock.props.size || 'medium'}
          onChange={(e) => handlePropertyChange('size', e.target.value)}
        >
          <MenuItem value="small">Petit</MenuItem>
          <MenuItem value="medium">Moyen</MenuItem>
          <MenuItem value="large">Grand</MenuItem>
        </Select>
      </FormControl>
    </>
  )

  const renderHeroProperties = () => (
    <>
      {renderCommonProperties()}
      <TextField
        fullWidth
        label="Titre principal"
        value={selectedBlock.props.title || ''}
        onChange={(e) => handlePropertyChange('title', e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Sous-titre"
        multiline
        rows={2}
        value={selectedBlock.props.subtitle || ''}
        onChange={(e) => handlePropertyChange('subtitle', e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Image de fond (URL)"
        value={selectedBlock.props.backgroundImage || ''}
        onChange={(e) => handlePropertyChange('backgroundImage', e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Couleur de fond"
        type="color"
        value={selectedBlock.props.backgroundColor || '#f5f5f5'}
        onChange={(e) => handlePropertyChange('backgroundColor', e.target.value)}
        sx={{ mb: 2 }}
      />
      <FormControlLabel
        control={
          <Switch
            checked={selectedBlock.props.showButton || false}
            onChange={(e) => handlePropertyChange('showButton', e.target.checked)}
          />
        }
        label="Afficher le bouton"
        sx={{ mb: 2 }}
      />
      {selectedBlock.props.showButton && (
        <TextField
          fullWidth
          label="Texte du bouton"
          value={selectedBlock.props.buttonText || ''}
          onChange={(e) => handlePropertyChange('buttonText', e.target.value)}
          sx={{ mb: 2 }}
        />
      )}
    </>
  )

  const renderVideoProperties = () => (
    <>
      <TextField
        fullWidth
        label="URL de la vidéo"
        value={selectedBlock.props.url || ''}
        onChange={(e) => handlePropertyChange('url', e.target.value)}
        sx={{ mb: 2 }}
        helperText="URL YouTube, Vimeo ou autre"
      />
      <Box sx={{ mb: 2 }}>
        <Typography gutterBottom>Hauteur: {selectedBlock.props.height || 315}px</Typography>
        <Slider
          value={selectedBlock.props.height || 315}
          onChange={(e, value) => handlePropertyChange('height', value)}
          min={200}
          max={600}
          step={15}
        />
      </Box>
      <FormControlLabel
        control={
          <Switch
            checked={selectedBlock.props.autoplay || false}
            onChange={(e) => handlePropertyChange('autoplay', e.target.checked)}
          />
        }
        label="Lecture automatique"
        sx={{ mb: 2 }}
      />
      <FormControlLabel
        control={
          <Switch
            checked={selectedBlock.props.controls !== false}
            onChange={(e) => handlePropertyChange('controls', e.target.checked)}
          />
        }
        label="Afficher les contrôles"
        sx={{ mb: 2 }}
      />
    </>
  )

  const renderNavbarProperties = () => (
    <>
      <TextField
        fullWidth
        label="Logo/Nom du site"
        value={selectedBlock.props.logo || ''}
        onChange={(e) => handlePropertyChange('logo', e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Couleur de fond"
        type="color"
        value={selectedBlock.props.backgroundColor || '#ffffff'}
        onChange={(e) => handlePropertyChange('backgroundColor', e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Couleur du texte"
        type="color"
        value={selectedBlock.props.textColor || '#333333'}
        onChange={(e) => handlePropertyChange('textColor', e.target.value)}
        sx={{ mb: 2 }}
      />

      <Typography variant="h6" gutterBottom sx={{ mt: 3, mb: 2 }}>
        Liens de navigation
      </Typography>

      {(selectedBlock.props.links || []).map((link, index) => (
        <Box key={index} sx={{ mb: 2, p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
          <TextField
            fullWidth
            label="Texte du lien"
            value={link.text || ''}
            onChange={(e) => {
              const newLinks = [...(selectedBlock.props.links || [])]
              newLinks[index] = { ...newLinks[index], text: e.target.value }
              handlePropertyChange('links', newLinks)
            }}
            sx={{ mb: 1 }}
          />
          <TextField
            fullWidth
            label="URL/Section (ex: #about, #contact)"
            value={link.url || ''}
            onChange={(e) => {
              const newLinks = [...(selectedBlock.props.links || [])]
              newLinks[index] = { ...newLinks[index], url: e.target.value }
              handlePropertyChange('links', newLinks)
            }}
            sx={{ mb: 1 }}
            helperText="Utilisez #section-name pour naviguer vers une section"
          />
          <Button
            color="error"
            onClick={() => {
              const newLinks = [...(selectedBlock.props.links || [])]
              newLinks.splice(index, 1)
              handlePropertyChange('links', newLinks)
            }}
            size="small"
          >
            Supprimer ce lien
          </Button>
        </Box>
      ))}

      <Button
        variant="outlined"
        onClick={() => {
          const newLinks = [...(selectedBlock.props.links || []), { text: 'Nouveau lien', url: '#section' }]
          handlePropertyChange('links', newLinks)
        }}
        fullWidth
        sx={{ mt: 1 }}
      >
        Ajouter un lien
      </Button>
    </>
  )

  const renderCardProperties = () => (
    <>
      {renderCommonProperties()}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Cartes par ligne</InputLabel>
        <Select
          value={selectedBlock.props.cardsPerRow || 3}
          onChange={(e) => handlePropertyChange('cardsPerRow', e.target.value)}
        >
          <MenuItem value={1}>1 carte</MenuItem>
          <MenuItem value={2}>2 cartes</MenuItem>
          <MenuItem value={3}>3 cartes</MenuItem>
          <MenuItem value={4}>4 cartes</MenuItem>
          <MenuItem value={6}>6 cartes</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="h6" gutterBottom sx={{ mt: 3, mb: 2 }}>
        Cartes ({(selectedBlock.props.cards || []).length})
      </Typography>

      {(selectedBlock.props.cards || []).map((card, index) => (
        <Accordion key={index} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>Carte {index + 1}: {card.title || 'Sans titre'}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              fullWidth
              label="Titre"
              value={card.title || ''}
              onChange={(e) => {
                const newCards = [...(selectedBlock.props.cards || [])]
                newCards[index] = { ...newCards[index], title: e.target.value }
                handlePropertyChange('cards', newCards)
              }}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Contenu"
              multiline
              rows={3}
              value={card.content || ''}
              onChange={(e) => {
                const newCards = [...(selectedBlock.props.cards || [])]
                newCards[index] = { ...newCards[index], content: e.target.value }
                handlePropertyChange('cards', newCards)
              }}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="URL de l'image"
              value={card.image || ''}
              onChange={(e) => {
                const newCards = [...(selectedBlock.props.cards || [])]
                newCards[index] = { ...newCards[index], image: e.target.value }
                handlePropertyChange('cards', newCards)
              }}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Texte du bouton"
              value={card.buttonText || ''}
              onChange={(e) => {
                const newCards = [...(selectedBlock.props.cards || [])]
                newCards[index] = { ...newCards[index], buttonText: e.target.value }
                handlePropertyChange('cards', newCards)
              }}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="URL du bouton"
              value={card.buttonUrl || ''}
              onChange={(e) => {
                const newCards = [...(selectedBlock.props.cards || [])]
                newCards[index] = { ...newCards[index], buttonUrl: e.target.value }
                handlePropertyChange('cards', newCards)
              }}
              sx={{ mb: 2 }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={card.showButton !== false}
                  onChange={(e) => {
                    const newCards = [...(selectedBlock.props.cards || [])]
                    newCards[index] = { ...newCards[index], showButton: e.target.checked }
                    handlePropertyChange('cards', newCards)
                  }}
                />
              }
              label="Afficher le bouton"
              sx={{ mb: 2 }}
            />
            <Button
              color="error"
              onClick={() => {
                const newCards = [...(selectedBlock.props.cards || [])]
                newCards.splice(index, 1)
                handlePropertyChange('cards', newCards)
              }}
              size="small"
              fullWidth
            >
              Supprimer cette carte
            </Button>
          </AccordionDetails>
        </Accordion>
      ))}

      <Button
        variant="outlined"
        startIcon={<Add />}
        onClick={() => {
          const newCards = [...(selectedBlock.props.cards || []), {
            title: 'Nouvelle carte',
            content: 'Contenu de la nouvelle carte',
            image: 'https://via.placeholder.com/300x200?text=Image',
            buttonText: 'En savoir plus',
            buttonUrl: '#',
            showButton: true
          }]
          handlePropertyChange('cards', newCards)
        }}
        fullWidth
        sx={{ mt: 2 }}
      >
        Ajouter une carte
      </Button>
    </>
  )

  const renderFormProperties = () => (
    <>
      {renderCommonProperties()}
      <TextField
        fullWidth
        label="Titre du formulaire"
        value={selectedBlock.props.title || ''}
        onChange={(e) => handlePropertyChange('title', e.target.value)}
        sx={{ mb: 2 }}
      />

      <Typography variant="h6" gutterBottom sx={{ mt: 3, mb: 2 }}>
        Champs du formulaire ({(selectedBlock.props.fields || []).length})
      </Typography>

      {(selectedBlock.props.fields || []).map((field, index) => (
        <Accordion key={field.id || index} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>Champ {index + 1}: {field.label || 'Sans label'}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Type de champ</InputLabel>
              <Select
                value={field.type || 'text'}
                onChange={(e) => {
                  const newFields = [...(selectedBlock.props.fields || [])]
                  newFields[index] = { ...newFields[index], type: e.target.value }
                  handlePropertyChange('fields', newFields)
                }}
              >
                <MenuItem value="text">Texte</MenuItem>
                <MenuItem value="email">Email</MenuItem>
                <MenuItem value="tel">Téléphone</MenuItem>
                <MenuItem value="number">Nombre</MenuItem>
                <MenuItem value="date">Date</MenuItem>
                <MenuItem value="textarea">Zone de texte</MenuItem>
                <MenuItem value="select">Liste déroulante</MenuItem>
                <MenuItem value="checkbox">Case à cocher</MenuItem>
                <MenuItem value="radio">Bouton radio</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Label"
              value={field.label || ''}
              onChange={(e) => {
                const newFields = [...(selectedBlock.props.fields || [])]
                newFields[index] = { ...newFields[index], label: e.target.value }
                handlePropertyChange('fields', newFields)
              }}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Placeholder"
              value={field.placeholder || ''}
              onChange={(e) => {
                const newFields = [...(selectedBlock.props.fields || [])]
                newFields[index] = { ...newFields[index], placeholder: e.target.value }
                handlePropertyChange('fields', newFields)
              }}
              sx={{ mb: 2 }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={field.required !== false}
                  onChange={(e) => {
                    const newFields = [...(selectedBlock.props.fields || [])]
                    newFields[index] = { ...newFields[index], required: e.target.checked }
                    handlePropertyChange('fields', newFields)
                  }}
                />
              }
              label="Champ obligatoire"
              sx={{ mb: 2 }}
            />
            <Button
              color="error"
              onClick={() => {
                const newFields = [...(selectedBlock.props.fields || [])]
                newFields.splice(index, 1)
                handlePropertyChange('fields', newFields)
              }}
              size="small"
              fullWidth
            >
              Supprimer ce champ
            </Button>
          </AccordionDetails>
        </Accordion>
      ))}

      <Button
        variant="outlined"
        startIcon={<Add />}
        onClick={() => {
          const newFields = [...(selectedBlock.props.fields || []), {
            id: Date.now(),
            type: 'text',
            label: 'Nouveau champ',
            placeholder: 'Entrez votre texte...',
            required: false
          }]
          handlePropertyChange('fields', newFields)
        }}
        fullWidth
        sx={{ mt: 2, mb: 3 }}
      >
        Ajouter un champ
      </Button>

      <Divider sx={{ my: 2 }} />

      <TextField
        fullWidth
        label="Texte du bouton"
        value={selectedBlock.props.buttonText || ''}
        onChange={(e) => handlePropertyChange('buttonText', e.target.value)}
        sx={{ mb: 2 }}
      />
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Couleur du bouton</InputLabel>
        <Select
          value={selectedBlock.props.buttonColor || 'primary'}
          onChange={(e) => handlePropertyChange('buttonColor', e.target.value)}
        >
          <MenuItem value="primary">Primaire</MenuItem>
          <MenuItem value="secondary">Secondaire</MenuItem>
          <MenuItem value="success">Succès</MenuItem>
          <MenuItem value="error">Erreur</MenuItem>
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Couleur de fond"
        type="color"
        value={selectedBlock.props.backgroundColor || '#ffffff'}
        onChange={(e) => handlePropertyChange('backgroundColor', e.target.value)}
        sx={{ mb: 2 }}
      />
    </>
  )

  const renderMapProperties = () => (
    <>
      {renderCommonProperties()}
      <TextField
        fullWidth
        label="Titre (optionnel)"
        value={selectedBlock.props.title || ''}
        onChange={(e) => handlePropertyChange('title', e.target.value)}
        sx={{ mb: 2 }}
      />
      <FormControlLabel
        control={
          <Switch
            checked={selectedBlock.props.showTitle !== false}
            onChange={(e) => handlePropertyChange('showTitle', e.target.checked)}
          />
        }
        label="Afficher le titre"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Adresse"
        value={selectedBlock.props.address || ''}
        onChange={(e) => handlePropertyChange('address', e.target.value)}
        sx={{ mb: 2 }}
        helperText="Ex: 123 Rue de la Paix, Paris, France"
      />
      <Box sx={{ mb: 2 }}>
        <Typography gutterBottom>Zoom: {selectedBlock.props.zoom || 15}</Typography>
        <Slider
          value={selectedBlock.props.zoom || 15}
          onChange={(e, value) => handlePropertyChange('zoom', value)}
          min={1}
          max={20}
          step={1}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography gutterBottom>Hauteur: {selectedBlock.props.height || '400px'}</Typography>
        <Slider
          value={parseInt(selectedBlock.props.height) || 400}
          onChange={(e, value) => handlePropertyChange('height', `${value}px`)}
          min={200}
          max={800}
          step={50}
        />
      </Box>
    </>
  )

  const renderProperties = () => {
    switch (selectedBlock.type) {
      case 'text':
        return renderTextProperties()
      case 'image':
        return renderImageProperties()
      case 'button':
        return renderButtonProperties()
      case 'navbar':
        return renderNavbarProperties()
      case 'hero':
        return renderHeroProperties()
      case 'card':
        return renderCardProperties()
      case 'video':
        return renderVideoProperties()
      case 'form':
        return renderFormProperties()
      case 'map':
        return renderMapProperties()
      default:
        return (
          <Typography color="text.secondary">
            Propriétés non disponibles pour ce type de bloc
          </Typography>
        )
    }
  }

  return (
    <Paper
      elevation={2}
      sx={{
        width: 320,
        height: '100%',
        overflow: 'auto',
        borderRadius: 2
      }}
    >
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" fontWeight="bold">
            Propriétés
          </Typography>
          <IconButton
            color="error"
            onClick={() => onDeleteBlock(selectedBlock.id)}
            size="small"
          >
            <Delete />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {selectedBlock.type.charAt(0).toUpperCase() + selectedBlock.type.slice(1)}
        </Typography>
      </Box>

      <Box sx={{ p: 2 }}>
        {renderProperties()}
      </Box>
    </Paper>
  )
}

export default PropertyPanel
