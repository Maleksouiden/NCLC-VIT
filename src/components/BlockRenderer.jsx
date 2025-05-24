import React from 'react'
import TextBlock from './blocks/TextBlock'
import ImageBlock from './blocks/ImageBlock'
import ButtonBlock from './blocks/ButtonBlock'
import NavbarBlock from './blocks/NavbarBlock'
import HeroBlock from './blocks/HeroBlock'
import CardBlock from './blocks/CardBlock'
import FooterBlock from './blocks/FooterBlock'
import VideoBlock from './blocks/VideoBlock'
import FormBlock from './blocks/FormBlock'
import MapBlock from './blocks/MapBlock'

const BlockRenderer = ({ block, isSelected, onClick }) => {
  const blockComponents = {
    text: TextBlock,
    image: ImageBlock,
    button: ButtonBlock,
    navbar: NavbarBlock,
    hero: HeroBlock,
    card: CardBlock,
    footer: FooterBlock,
    video: VideoBlock,
    form: FormBlock,
    map: MapBlock
  }

  const BlockComponent = blockComponents[block.type]

  if (!BlockComponent) {
    return (
      <div
        onClick={onClick}
        style={{
          padding: '20px',
          border: isSelected ? '2px solid #00C4CC' : '2px solid #ddd',
          borderRadius: '4px',
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
          cursor: 'pointer'
        }}
      >
        <p>Type de bloc non reconnu: {block.type}</p>
      </div>
    )
  }

  return (
    <div id={block.props.sectionId || undefined}>
      <BlockComponent
        props={block.props}
        isSelected={isSelected}
        onClick={onClick}
      />
    </div>
  )
}

export default BlockRenderer
