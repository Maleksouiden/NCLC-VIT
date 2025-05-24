import React from 'react'
import { Box } from '@mui/material'

const VideoBlock = ({ props, isSelected, onClick }) => {
  const {
    url = 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    width = '100%',
    height = '315',
    autoplay = false,
    controls = true,
    textAlign = 'center',
    padding = '20px'
  } = props

  // Extraire l'ID de la vidéo YouTube si c'est une URL YouTube
  const getYouTubeEmbedUrl = (url) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0]
      return `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&controls=${controls ? 1 : 0}`
    } else if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0]
      return `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&controls=${controls ? 1 : 0}`
    }
    return url
  }

  const embedUrl = getYouTubeEmbedUrl(url)

  return (
    <Box
      onClick={onClick}
      sx={{
        padding,
        textAlign,
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
        component="iframe"
        src={embedUrl}
        sx={{
          width,
          height: `${height}px`,
          border: 'none',
          borderRadius: 1,
          maxWidth: '100%',
          display: 'block',
          margin: textAlign === 'center' ? '0 auto' : textAlign === 'right' ? '0 0 0 auto' : '0'
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  )
}

export default VideoBlock
