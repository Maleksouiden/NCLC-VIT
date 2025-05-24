import React, { useState } from 'react'
import {
  Box,
  Typography,
  Chip,
  Collapse,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material'
import {
  ExpandMore,
  ExpandLess,
  Anchor,
  Info
} from '@mui/icons-material'

const SectionGuide = ({ blocks }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  // Extraire toutes les sections avec ID
  const sections = blocks
    .filter(block => block.props.sectionId)
    .map(block => ({
      id: block.props.sectionId,
      type: block.type,
      title: block.props.title || block.props.content || block.props.logo || `Section ${block.type}`
    }))

  if (sections.length === 0) {
    return null
  }

  return (
    <Paper
      elevation={1}
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        width: 300,
        zIndex: 1000,
        borderRadius: 2
      }}
    >
      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          bgcolor: 'primary.main',
          color: 'white',
          borderRadius: '8px 8px 0 0'
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Anchor fontSize="small" />
          <Typography variant="subtitle2" fontWeight="bold">
            Sections disponibles ({sections.length})
          </Typography>
        </Box>
        <IconButton size="small" sx={{ color: 'white' }}>
          {isExpanded ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </Box>

      <Collapse in={isExpanded}>
        <Box sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Utilisez ces IDs dans vos liens de navigation :
          </Typography>
          
          <List dense>
            {sections.map((section, index) => (
              <ListItem
                key={index}
                sx={{
                  py: 0.5,
                  px: 1,
                  borderRadius: 1,
                  '&:hover': {
                    bgcolor: 'action.hover'
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Chip
                    label={section.type}
                    size="small"
                    variant="outlined"
                    sx={{ fontSize: '0.7rem', height: 20 }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{ color: 'primary.main' }}
                      >
                        #{section.id}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {section.title.length > 20 
                          ? section.title.substring(0, 20) + '...' 
                          : section.title
                        }
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>

          <Box
            sx={{
              mt: 2,
              p: 1.5,
              bgcolor: 'info.light',
              borderRadius: 1,
              display: 'flex',
              gap: 1
            }}
          >
            <Info fontSize="small" color="info" />
            <Typography variant="caption" color="info.dark">
              Copiez ces IDs (avec #) dans les liens de votre navbar pour créer une navigation fluide
            </Typography>
          </Box>
        </Box>
      </Collapse>
    </Paper>
  )
}

export default SectionGuide
