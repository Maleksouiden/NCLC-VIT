import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Box } from '@mui/material'
import BlockRenderer from './BlockRenderer'

const DraggableBlock = ({ 
  block, 
  index, 
  isSelected, 
  onClick, 
  onMoveBlock,
  isPreviewMode 
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'block',
    item: { id: block.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: !isPreviewMode
  })

  const [{ isOver }, drop] = useDrop({
    accept: 'block',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        onMoveBlock(draggedItem.index, index)
        draggedItem.index = index
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    canDrop: !isPreviewMode
  })

  const ref = (node) => {
    if (!isPreviewMode) {
      drag(drop(node))
    }
  }

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isDragging ? 0.5 : 1,
        position: 'relative',
        mb: isPreviewMode ? 0 : 1,
        '&::before': isOver && !isPreviewMode ? {
          content: '""',
          position: 'absolute',
          top: -2,
          left: 0,
          right: 0,
          height: 4,
          backgroundColor: 'primary.main',
          borderRadius: 1,
          zIndex: 1000
        } : {},
        cursor: !isPreviewMode ? 'move' : 'default'
      }}
    >
      <BlockRenderer
        block={block}
        isSelected={isSelected}
        onClick={onClick}
      />
    </Box>
  )
}

export default DraggableBlock
