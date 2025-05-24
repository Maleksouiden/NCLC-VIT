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
- **Palette de blocs** : 10 types de blocs disponibles
- **Panneau de propriétés** : Personnalisation complète de chaque bloc
- **Mode aperçu** : Visualisation en temps réel
- **Undo/Redo** : Historique des modifications (Ctrl+Z / Ctrl+Y)
- **Sauvegarde automatique** : Dans le localStorage
- **Performance optimisée** : Écriture fluide sans lenteur

### 🧩 Types de Blocs Disponibles

1. **Texte** - Contenu textuel avec polices personnalisables
2. **Image** - Images avec options de style avancées
3. **Bouton** - Boutons d'action configurables
4. **Navigation** - Barres de navigation avec gestion des liens
5. **Hero Section** - Sections d'en-tête avec CTA
6. **Cartes** - Grilles de cartes personnalisables (1-6 par ligne)
7. **Vidéo** - Intégration YouTube/Vimeo
8. **Formulaire** - Formulaires dynamiques avec 9 types de champs
9. **Pied de page** - Footer avec liens sociaux
10. **Maps** - Cartes Google Maps interactives

### 📤 Export/Import

- **Export HTML** : Code HTML/CSS complet
- **Export JSON** : Structure réutilisable
- **Import JSON** : Restauration de projets

### 🎨 Personnalisation

- Mode sombre/clair
- Thème moderne avec Material-UI
- Animations et transitions fluides
- Design responsive
- **10 palettes de couleurs prêtes**
- **16 polices disponibles**
- **Sélection visuelle intuitive**

## 🚀 Nouvelles Fonctionnalités v2.0

### ⚡ **Performance Optimisée**

- **Lenteur d'écriture résolue** :
  - Debounce augmenté à 1.5s pour les modifications de texte
  - Fonction `setCurrentState` pour mise à jour immédiate de l'affichage
  - Enregistrement différé dans l'historique undo/redo
  - **Résultat** : Écriture fluide et réactive

### 🎴 **Système de cartes amélioré**

- **Gestion multiple** : Plusieurs cartes par bloc
- **Cartes par ligne** : 1, 2, 3, 4 ou 6 cartes par ligne
- **Personnalisation complète** :
  - ✅ Modification de l'image de chaque carte
  - ✅ Modification du texte et contenu
  - ✅ Modification du bouton (texte, URL, affichage)
  - ✅ Ajout/suppression de cartes dynamique
- **Interface intuitive** : Accordéons pour chaque carte

### 📝 **Formulaire avancé**

- **Gestion des champs** :
  - ✅ Ajout/suppression de champs
  - ✅ **9 types de champs** : texte, email, téléphone, nombre, date, textarea, select, checkbox, radio
  - ✅ Configuration complète : label, placeholder, obligatoire
- **Interface organisée** : Accordéons pour chaque champ

### 🗺️ **Nouveau bloc Maps**

- **Intégration Google Maps** : Cartes interactives
- **Configuration** :
  - Adresse personnalisable
  - Niveau de zoom (1-20)
  - Hauteur ajustable (200-800px)
  - Titre optionnel
- **Fonctionnel** : Navigation fluide vers les adresses

### 🎨 **Système de design avancé**

- **10 palettes de couleurs prêtes** :
  - Moderne, Océan, Coucher de soleil, Nature, Élégant
  - Vibrant, Terre, Pastel, Corporate, Automne
- **16 polices disponibles** :
  - **Sans-serif** : Roboto, Open Sans, Lato, Montserrat, Poppins, Inter, etc.
  - **Serif** : Playfair Display, Merriweather, Georgia, Times New Roman
  - **Monospace** : Courier New, Monaco
- **Interface intuitive** : Sélection visuelle des couleurs et polices

### 🛠️ **Interface utilisateur améliorée**

- **Accordéons organisés** : Propriétés groupées logiquement
- **Palettes visuelles** : Sélection de couleurs par clic
- **Aperçu des polices** : Chaque police affichée dans son style
- **Feedback visuel** : Hover effects, transitions fluides

### 📱 **Nouvelles fonctionnalités**

1. **Cartes multiples** : Grilles personnalisables
2. **Formulaires dynamiques** : Champs configurables
3. **Maps intégrées** : Localisation interactive
4. **Palettes de couleurs** : Design professionnel
5. **Polices variées** : Typographie riche
6. **Performance optimisée** : Écriture fluide

## 🚀 Installation

```bash
# Cloner le projet
git clone https://github.com/Maleksouiden/NCLC-VIT
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

## 🎯 Workflow utilisateur amélioré

### **Pour les cartes** :

1. Ajouter un bloc "Cartes"
2. Choisir le nombre de cartes par ligne (1-6)
3. Configurer chaque carte individuellement
4. Ajouter/supprimer des cartes à volonté

### **Pour les formulaires** :

1. Ajouter un bloc "Formulaire"
2. Configurer le titre et le bouton
3. Ajouter/modifier/supprimer des champs
4. Choisir le type de chaque champ
5. Configurer labels et placeholders

### **Pour les maps** :

1. Ajouter un bloc "Carte"
2. Entrer l'adresse désirée
3. Ajuster le zoom et la hauteur
4. Personnaliser le titre

### **Pour le design** :

1. Sélectionner un bloc de texte
2. Choisir une palette de couleurs
3. Sélectionner une police
4. Voir le résultat en temps réel

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
