# 🏗️ Conception et Architecture - Template Builder

## 📋 Vue d'ensemble

Template Builder est une application web moderne permettant de créer des sites web visuellement sans code. L'application suit une architecture modulaire basée sur React avec une approche component-driven.

## 🎯 Objectifs de conception

### Objectifs principaux
- **Simplicité d'utilisation** : Interface intuitive pour utilisateurs non-techniques
- **Flexibilité** : Système de blocs modulaires et personnalisables
- **Performance** : Réactivité optimale avec gestion intelligente des états
- **Extensibilité** : Architecture permettant l'ajout facile de nouveaux types de blocs

### Contraintes techniques
- **100% client-side** : Aucun backend requis
- **Responsive design** : Compatible mobile et desktop
- **Export autonome** : HTML/CSS généré indépendant
- **Sauvegarde locale** : Persistance via localStorage

## 🏛️ Architecture générale

```
┌─────────────────────────────────────────────────────────────┐
│                    Template Builder App                     │
├─────────────────────────────────────────────────────────────┤
│  Landing Page  │  Template Selector  │      Editor         │
├─────────────────────────────────────────────────────────────┤
│                    State Management                         │
│  • App State (routing)  • Editor State (blocks, undo/redo) │
├─────────────────────────────────────────────────────────────┤
│                   Component Layer                           │
│  • Block Components  • UI Components  • Utility Components │
├─────────────────────────────────────────────────────────────┤
│                    Service Layer                            │
│  • Export Utils  • Theme Management  • Local Storage       │
├─────────────────────────────────────────────────────────────┤
│                   External Libraries                        │
│  • React DnD  • Material-UI  • UUID  • React Hook Form    │
└─────────────────────────────────────────────────────────────┘
```

## 🧩 Architecture des composants

### 1. **Pages principales**
```
src/pages/
├── LandingPage.jsx     # Page d'accueil avec présentation
├── TemplateSelector.jsx # Sélection de templates prédéfinis
└── Editor.jsx          # Éditeur principal avec drag & drop
```

### 2. **Composants de blocs**
```
src/components/blocks/
├── TextBlock.jsx       # Bloc de texte personnalisable
├── ImageBlock.jsx      # Bloc d'image avec options
├── ButtonBlock.jsx     # Bouton d'action
├── NavbarBlock.jsx     # Barre de navigation
├── HeroBlock.jsx       # Section hero avec CTA
├── CardBlock.jsx       # Carte avec image/contenu
├── VideoBlock.jsx      # Intégration vidéo
├── FormBlock.jsx       # Formulaire de contact
└── FooterBlock.jsx     # Pied de page
```

### 3. **Composants utilitaires**
```
src/components/
├── BlockRenderer.jsx   # Rendu conditionnel des blocs
├── BlockPalette.jsx    # Palette des blocs disponibles
├── PropertyPanel.jsx   # Panneau de configuration
├── DraggableBlock.jsx  # Wrapper drag & drop
└── SectionGuide.jsx    # Guide des sections
```

## 🔄 Gestion des états

### État global (App.jsx)
```javascript
const [currentPage, setCurrentPage] = useState('landing')
const [selectedTemplate, setSelectedTemplate] = useState(null)
const { theme, isDarkMode, toggleTheme } = useTheme()
```

### État de l'éditeur (Editor.jsx)
```javascript
const {
  state: blocks,           // Liste des blocs
  setState: setBlocks,     // Mise à jour avec undo/redo
  undo, redo, canUndo, canRedo
} = useUndoRedo(template?.blocks || [])

const [selectedBlockId, setSelectedBlockId] = useState(null)
const [isPreviewMode, setIsPreviewMode] = useState(false)
```

## 🎨 Système de design

### Thème et couleurs
```javascript
const theme = createTheme({
  palette: {
    primary: { main: '#00C4CC' },    // Cyan moderne
    secondary: { main: '#2F80ED' },   // Bleu professionnel
    error: { main: '#FF647C' },      // Rouge doux
    mode: isDarkMode ? 'dark' : 'light'
  }
})
```

### Composants Material-UI personnalisés
- **Bordures arrondies** : 12px par défaut
- **Animations** : Transitions 0.3s ease
- **Typographie** : Roboto avec poids variables
- **Élévations** : Ombres subtiles pour la profondeur

## 🔧 Hooks personnalisés

### useTheme.js
```javascript
export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(...)
  const toggleTheme = () => setIsDarkMode(!isDarkMode)
  const theme = createTheme({ ... })
  return { theme, isDarkMode, toggleTheme }
}
```

### useUndoRedo.js
```javascript
export const useUndoRedo = (initialState) => {
  const [history, setHistory] = useState([initialState])
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Debounce pour optimiser les performances
  const setState = useCallback((newState, immediate = false) => {
    if (!immediate) {
      // Attendre 500ms avant d'enregistrer
      setTimeout(() => addToHistory(newState), 500)
    } else {
      addToHistory(newState)
    }
  }, [currentIndex])
}
```

## 🎯 Système de blocs

### Structure d'un bloc
```javascript
const block = {
  id: 'uuid-v4',           // Identifiant unique
  type: 'text',            // Type de bloc
  props: {                 // Propriétés configurables
    content: 'Mon texte',
    fontSize: 16,
    color: '#000000',
    sectionId: 'about'     // Pour navigation
  }
}
```

### Cycle de vie d'un bloc
1. **Création** : Depuis BlockPalette avec props par défaut
2. **Rendu** : Via BlockRenderer selon le type
3. **Sélection** : Clic pour afficher dans PropertyPanel
4. **Modification** : Mise à jour des props via PropertyPanel
5. **Déplacement** : Drag & drop avec React DnD
6. **Suppression** : Bouton dans PropertyPanel

## 🚀 Système de drag & drop

### Implémentation avec React DnD
```javascript
// DraggableBlock.jsx
const [{ isDragging }, drag] = useDrag({
  type: 'block',
  item: { id: block.id, index },
  collect: (monitor) => ({ isDragging: monitor.isDragging() })
})

const [{ isOver }, drop] = useDrop({
  accept: 'block',
  hover: (draggedItem) => {
    if (draggedItem.index !== index) {
      onMoveBlock(draggedItem.index, index)
      draggedItem.index = index
    }
  }
})
```

## 📤 Système d'export

### Export HTML
```javascript
export const exportToHTML = (blocks) => {
  const htmlContent = blocks.map(generateBlockHTML).join('\n')
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>/* CSS optimisé */</style>
      </head>
      <body>${htmlContent}</body>
    </html>
  `
}
```

### Export JSON
```javascript
export const exportToJSON = (blocks, template) => {
  return JSON.stringify({
    version: '1.0',
    template: { ... },
    blocks,
    exportedAt: new Date().toISOString(),
    metadata: { totalBlocks: blocks.length }
  }, null, 2)
}
```

## 🔍 Optimisations de performance

### 1. **Debouncing des modifications**
- Undo/redo : 500ms de délai pour les modifications de propriétés
- Actions immédiates : Ajout/suppression/déplacement de blocs

### 2. **Mémorisation des composants**
```javascript
const BlockRenderer = React.memo(({ block, isSelected, onClick }) => {
  // Rendu optimisé
})
```

### 3. **Lazy loading**
- Composants chargés à la demande
- Images avec loading="lazy"

### 4. **Gestion mémoire**
- Historique limité à 50 états
- Nettoyage des timeouts

## 🧪 Patterns de conception utilisés

### 1. **Component Composition**
```javascript
<Editor>
  <BlockPalette onAddBlock={handleAddBlock} />
  <PreviewArea>
    {blocks.map(block => 
      <DraggableBlock>
        <BlockRenderer block={block} />
      </DraggableBlock>
    )}
  </PreviewArea>
  <PropertyPanel selectedBlock={selectedBlock} />
</Editor>
```

### 2. **Render Props**
```javascript
const DraggableBlock = ({ children, ...props }) => {
  const [{ isDragging }, drag] = useDrag(...)
  return <div ref={drag}>{children}</div>
}
```

### 3. **Higher-Order Components**
```javascript
const withTheme = (Component) => (props) => {
  const { theme } = useTheme()
  return <Component {...props} theme={theme} />
}
```

### 4. **Factory Pattern**
```javascript
const blockComponents = {
  text: TextBlock,
  image: ImageBlock,
  // ...
}

const BlockRenderer = ({ block }) => {
  const Component = blockComponents[block.type]
  return <Component {...block.props} />
}
```

## 🔒 Gestion des erreurs

### 1. **Validation des props**
```javascript
const TextBlock = ({ props }) => {
  const {
    content = 'Texte par défaut',
    fontSize = 16,
    color = '#000000'
  } = props || {}
  // ...
}
```

### 2. **Error Boundaries**
```javascript
class BlockErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.error('Erreur dans le bloc:', error)
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Erreur de rendu du bloc</div>
    }
    return this.props.children
  }
}
```

## 📱 Responsive Design

### Breakpoints Material-UI
```javascript
const theme = createTheme({
  breakpoints: {
    xs: 0,     // Mobile
    sm: 600,   // Tablet
    md: 900,   // Desktop
    lg: 1200,  // Large desktop
    xl: 1536   // Extra large
  }
})
```

### Adaptation mobile
- Navigation collapsible
- Palette de blocs en drawer
- Propriétés en modal
- Touch-friendly drag & drop

## 🔮 Extensibilité

### Ajouter un nouveau type de bloc

1. **Créer le composant**
```javascript
// src/components/blocks/NewBlock.jsx
const NewBlock = ({ props, isSelected, onClick }) => {
  return <div onClick={onClick}>...</div>
}
```

2. **Enregistrer dans BlockRenderer**
```javascript
const blockComponents = {
  // ...
  newBlock: NewBlock
}
```

3. **Ajouter à la palette**
```javascript
const blockTypes = [
  // ...
  {
    type: 'newBlock',
    name: 'Nouveau Bloc',
    icon: <Icon />,
    defaultProps: { ... }
  }
]
```

4. **Propriétés dans PropertyPanel**
```javascript
const renderProperties = () => {
  switch (selectedBlock.type) {
    // ...
    case 'newBlock':
      return renderNewBlockProperties()
  }
}
```

## 📊 Métriques et monitoring

### Performance
- Temps de rendu des blocs
- Taille de l'historique undo/redo
- Temps d'export HTML/JSON

### Utilisation
- Types de blocs les plus utilisés
- Templates les plus populaires
- Fonctionnalités les plus utilisées

## 🔧 Outils de développement

### Build et bundling
- **Vite** : Build tool moderne et rapide
- **ESLint** : Linting du code
- **Prettier** : Formatage automatique

### Testing (à implémenter)
- **Jest** : Tests unitaires
- **React Testing Library** : Tests de composants
- **Cypress** : Tests end-to-end

## 🚀 Déploiement

### Build de production
```bash
npm run build
```

### Optimisations
- Tree shaking automatique
- Code splitting par route
- Compression des assets
- Cache busting

Cette architecture modulaire et extensible permet une maintenance facile et l'ajout de nouvelles fonctionnalités sans impact sur l'existant.
