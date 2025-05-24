import React, { useState } from 'react'
import { Box, ThemeProvider, CssBaseline } from '@mui/material'
import { useTheme } from './hooks/useTheme'
import LandingPage from './pages/LandingPage'
import TemplateSelector from './pages/TemplateSelector'
import Editor from './pages/Editor'

function App() {
  const [currentPage, setCurrentPage] = useState('landing') // 'landing', 'selector', 'editor'
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const { theme, isDarkMode, toggleTheme } = useTheme()

  const handleStartClick = () => {
    setCurrentPage('selector')
  }

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template)
    setCurrentPage('editor')
  }

  const handleBackToSelector = () => {
    setCurrentPage('selector')
  }

  const handleBackToLanding = () => {
    setCurrentPage('landing')
    setSelectedTemplate(null)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        {currentPage === 'landing' && (
          <LandingPage
            onStartClick={handleStartClick}
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
          />
        )}
        {currentPage === 'selector' && (
          <TemplateSelector
            onTemplateSelect={handleTemplateSelect}
            onBackClick={handleBackToLanding}
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
          />
        )}
        {currentPage === 'editor' && (
          <Editor
            template={selectedTemplate}
            onBackClick={handleBackToSelector}
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
          />
        )}
      </Box>
    </ThemeProvider>
  )
}

export default App
