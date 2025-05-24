import React, { useState, useEffect } from 'react'
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container
} from '@mui/material'
import {
  ArrowBack,
  Visibility,
  Download,
  Upload,
  Save,
  DarkMode,
  LightMode,
  Undo,
  Redo
} from '@mui/icons-material'
import BlockPalette from '../components/BlockPalette'
import PropertyPanel from '../components/PropertyPanel'
import BlockRenderer from '../components/BlockRenderer'
import DraggableBlock from '../components/DraggableBlock'
import SectionGuide from '../components/SectionGuide'
import { exportToHTML, exportToJSON, importFromJSON } from '../utils/exportUtils'
import { useUndoRedo } from '../hooks/useUndoRedo'

const Editor = ({ template, onBackClick, isDarkMode, toggleTheme }) => {
  const {
    state: blocks,
    setState: setBlocks,
    setCurrentState: setCurrentBlocks,
    undo,
    redo,
    canUndo,
    canRedo
  } = useUndoRedo(template?.blocks || [])

  const [selectedBlockId, setSelectedBlockId] = useState(null)
  const [isPreviewMode, setIsPreviewMode] = useState(false)

  useEffect(() => {
    // Sauvegarder automatiquement dans localStorage
    const saveData = {
      templateId: template?.id,
      blocks,
      lastSaved: new Date().toISOString()
    }
    localStorage.setItem('template-builder-autosave', JSON.stringify(saveData))
  }, [blocks, template])

  useEffect(() => {
    // Raccourcis clavier pour undo/redo
    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 'z' && !e.shiftKey) {
          e.preventDefault()
          undo()
        } else if ((e.key === 'y') || (e.key === 'z' && e.shiftKey)) {
          e.preventDefault()
          redo()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [undo, redo])

  const handleAddBlock = (newBlock) => {
    const newBlocks = [...blocks, newBlock]
    setBlocks(newBlocks, true) // Immédiat pour ajout de bloc
    setSelectedBlockId(newBlock.id)
  }

  const handleUpdateBlock = (updatedBlock, immediate = false) => {
    const newBlocks = blocks.map(block =>
      block.id === updatedBlock.id ? updatedBlock : block
    )

    if (immediate) {
      setBlocks(newBlocks, true) // Immédiat pour certaines modifications
    } else {
      // Mise à jour immédiate de l'affichage sans enregistrer dans l'historique
      setCurrentBlocks(newBlocks)
      // Enregistrement différé dans l'historique
      setBlocks(newBlocks) // Debounced pour modifications de propriétés
    }
  }

  const handleDeleteBlock = (blockId) => {
    const newBlocks = blocks.filter(block => block.id !== blockId)
    setBlocks(newBlocks, true) // Immédiat pour suppression de bloc
    if (selectedBlockId === blockId) {
      setSelectedBlockId(null)
    }
  }

  const handleBlockClick = (blockId) => {
    if (!isPreviewMode) {
      setSelectedBlockId(blockId)
    }
  }

  const handleMoveBlock = (fromIndex, toIndex) => {
    const newBlocks = [...blocks]
    const [movedBlock] = newBlocks.splice(fromIndex, 1)
    newBlocks.splice(toIndex, 0, movedBlock)
    setBlocks(newBlocks, true) // Immédiat pour déplacement de bloc
  }

  const handleExportHTML = () => {
    const html = exportToHTML(blocks)
    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'template.html'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleExportJSON = () => {
    const json = exportToJSON(blocks, template)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'template.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImportJSON = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const importedData = importFromJSON(e.target.result)
          setBlocks(importedData.blocks)
          setSelectedBlockId(null)
        } catch (error) {
          alert('Erreur lors de l\'importation du fichier JSON')
        }
      }
      reader.readAsText(file)
    }
  }

  const selectedBlock = blocks.find(block => block.id === selectedBlockId)

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Barre supérieure */}
      <AppBar position="static" elevation={1} sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
        <Toolbar>
          <IconButton
            edge="start"
            onClick={onBackClick}
            sx={{ mr: 2, color: 'text.primary' }}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'text.primary' }}>
            Éditeur - {template?.name || 'Template'}
          </Typography>

          <IconButton
            onClick={undo}
            disabled={!canUndo}
            sx={{ mr: 1, color: 'text.primary' }}
            title="Annuler"
          >
            <Undo />
          </IconButton>

          <IconButton
            onClick={redo}
            disabled={!canRedo}
            sx={{ mr: 1, color: 'text.primary' }}
            title="Refaire"
          >
            <Redo />
          </IconButton>

          <IconButton
            onClick={toggleTheme}
            sx={{ mr: 2, color: 'text.primary' }}
          >
            {isDarkMode ? <LightMode /> : <DarkMode />}
          </IconButton>

          <Button
            startIcon={<Visibility />}
            onClick={() => setIsPreviewMode(!isPreviewMode)}
            sx={{ mr: 1 }}
            variant={isPreviewMode ? 'contained' : 'outlined'}
          >
            {isPreviewMode ? 'Éditer' : 'Aperçu'}
          </Button>

          <Button
            startIcon={<Download />}
            onClick={handleExportHTML}
            sx={{ mr: 1 }}
          >
            HTML
          </Button>

          <Button
            startIcon={<Download />}
            onClick={handleExportJSON}
            sx={{ mr: 1 }}
          >
            JSON
          </Button>

          <input
            accept=".json"
            style={{ display: 'none' }}
            id="import-json"
            type="file"
            onChange={handleImportJSON}
          />
          <label htmlFor="import-json">
            <Button
              startIcon={<Upload />}
              component="span"
            >
              Importer
            </Button>
          </label>
        </Toolbar>
      </AppBar>

      {/* Zone principale */}
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Palette de blocs (cachée en mode aperçu) */}
        {!isPreviewMode && (
          <Box sx={{ borderRight: 1, borderColor: 'divider' }}>
            <BlockPalette onAddBlock={handleAddBlock} />
          </Box>
        )}

        {/* Zone d'édition */}
        <Box
          sx={{
            flex: 1,
            overflow: 'auto',
            bgcolor: 'grey.50',
            p: isPreviewMode ? 0 : 2
          }}
        >
          <Container
            maxWidth={isPreviewMode ? false : 'lg'}
            sx={{
              bgcolor: 'white',
              minHeight: '100%',
              p: isPreviewMode ? 0 : 3,
              borderRadius: isPreviewMode ? 0 : 2,
              boxShadow: isPreviewMode ? 0 : 1
            }}
          >
            {blocks.length === 0 ? (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 400,
                  border: '2px dashed',
                  borderColor: 'grey.300',
                  borderRadius: 2,
                  bgcolor: 'grey.50'
                }}
              >
                <Typography color="text.secondary" variant="h6">
                  {isPreviewMode
                    ? 'Aucun contenu à afficher'
                    : 'Ajoutez des blocs depuis la palette de gauche'
                  }
                </Typography>
              </Box>
            ) : (
              blocks.map((block, index) => (
                <DraggableBlock
                  key={block.id}
                  block={block}
                  index={index}
                  isSelected={!isPreviewMode && selectedBlockId === block.id}
                  onClick={() => handleBlockClick(block.id)}
                  onMoveBlock={handleMoveBlock}
                  isPreviewMode={isPreviewMode}
                />
              ))
            )}
          </Container>
        </Box>

        {/* Panneau de propriétés (caché en mode aperçu) */}
        {!isPreviewMode && (
          <Box sx={{ borderLeft: 1, borderColor: 'divider' }}>
            <PropertyPanel
              selectedBlock={selectedBlock}
              onUpdateBlock={handleUpdateBlock}
              onDeleteBlock={handleDeleteBlock}
            />
          </Box>
        )}
      </Box>

      {/* Guide des sections (seulement en mode édition) */}
      {!isPreviewMode && <SectionGuide blocks={blocks} />}
    </Box>
  )
}

export default Editor
