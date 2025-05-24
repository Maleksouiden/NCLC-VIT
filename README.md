# 🎨 Template Builder

Une application web moderne et intuitive pour créer des sites web avec un éditeur visuel drag & drop.

## ✨ Fonctionnalités

### 🏠 Page d'accueil

- Interface moderne avec animations fluides
- Présentation des fonctionnalités principales
- Bouton de basculement mode sombre/clair

### 📋 Sélecteur de Templates

- Templates prédéfinis (Landing Page, Portfolio, Business, Blog)
- Aperçu visuel de chaque template
- Option de commencer avec un template vide

### 🎯 Éditeur Visuel

- **Drag & Drop** : Réorganisez les blocs par glisser-déposer
- **Palette de blocs** : 9 types de blocs disponibles
- **Panneau de propriétés** : Personnalisation complète de chaque bloc
- **Mode aperçu** : Visualisation en temps réel
- **Undo/Redo** : Historique des modifications (Ctrl+Z / Ctrl+Y)
- **Sauvegarde automatique** : Dans le localStorage

### 🧩 Types de Blocs Disponibles

1. **Texte** - Contenu textuel personnalisable
2. **Image** - Images avec options de style
3. **Bouton** - Boutons d'action configurables
4. **Navigation** - Barres de navigation
5. **Hero Section** - Sections d'en-tête avec CTA
6. **Carte** - Cartes avec image et contenu
7. **Vidéo** - Intégration YouTube/Vimeo
8. **Formulaire** - Formulaires de contact
9. **Pied de page** - Footer avec liens sociaux

### 📤 Export/Import

- **Export HTML** : Code HTML/CSS complet
- **Export JSON** : Structure réutilisable
- **Import JSON** : Restauration de projets

### 🎨 Personnalisation

- Mode sombre/clair
- Thème moderne avec Material-UI
- Animations et transitions fluides
- Design responsive

## 🚀 Installation

```bash
# Cloner le projet
git clone [url-du-repo]
cd template-builder

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 🛠️ Technologies Utilisées

- **React 18** - Framework frontend
- **Vite** - Build tool moderne
- **Material-UI (MUI)** - Composants UI
- **React DnD** - Drag & drop
- **React Hook Form** - Gestion des formulaires
- **UUID** - Génération d'identifiants uniques

## 📱 Utilisation

1. **Démarrage** : Cliquez sur "Commencer" depuis la page d'accueil
2. **Sélection** : Choisissez un template ou commencez avec une page vierge
3. **Édition** :
   - Ajoutez des blocs depuis la palette de gauche
   - Sélectionnez un bloc pour le modifier dans le panneau de droite
   - Réorganisez par drag & drop
   - Utilisez Ctrl+Z/Ctrl+Y pour annuler/refaire
4. **Aperçu** : Cliquez sur "Aperçu" pour voir le rendu final
5. **Export** : Exportez en HTML ou JSON

## 🎯 Fonctionnalités Avancées

### Raccourcis Clavier

- `Ctrl+Z` : Annuler
- `Ctrl+Y` ou `Ctrl+Shift+Z` : Refaire

### Sauvegarde Automatique

- Sauvegarde automatique dans le localStorage
- Récupération automatique au rechargement

### Thèmes

- Basculement instantané entre mode clair et sombre
- Persistance du choix de thème

## 🔧 Développement

```bash
# Mode développement
npm run dev

# Build de production
npm run build

# Aperçu du build
npm run preview
```

## 📄 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── blocks/         # Composants de blocs
│   ├── BlockPalette.jsx
│   ├── PropertyPanel.jsx
│   └── ...
├── pages/              # Pages principales
│   ├── LandingPage.jsx
│   ├── TemplateSelector.jsx
│   └── Editor.jsx
├── hooks/              # Hooks personnalisés
│   ├── useTheme.js
│   └── useUndoRedo.js
├── templates/          # Templates prédéfinis
├── utils/              # Utilitaires
└── ...
```

## 🎨 Design System

- **Couleurs principales** : #00C4CC, #2F80ED, #FF647C
- **Police** : Roboto
- **Bordures** : 12px border-radius
- **Animations** : Transitions fluides 0.3s

## 🚀 Déploiement

L'application peut être déployée sur n'importe quelle plateforme supportant les sites statiques :

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 📝 Licence

MIT License - Voir le fichier LICENSE pour plus de détails.
