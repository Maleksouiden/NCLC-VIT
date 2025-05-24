import { v4 as uuidv4 } from 'uuid'

export const predefinedTemplates = [
  {
    id: 'landing-page',
    name: 'Landing Page',
    description: 'Page d\'accueil moderne avec hero section',
    preview: '/previews/landing-page.jpg',
    blocks: [
      {
        id: uuidv4(),
        type: 'navbar',
        props: {
          logo: 'Mon Site',
          links: [
            { text: 'Accueil', url: '#home' },
            { text: 'Services', url: '#services' },
            { text: 'Contact', url: '#contact' }
          ],
          backgroundColor: '#ffffff',
          textColor: '#333333'
        }
      },
      {
        id: uuidv4(),
        type: 'hero',
        props: {
          title: 'Bienvenue sur notre site',
          subtitle: 'Découvrez nos services exceptionnels',
          backgroundImage: '',
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
          buttonText: 'En savoir plus',
          buttonUrl: '#services'
        }
      },
      {
        id: uuidv4(),
        type: 'text',
        props: {
          content: 'Nous offrons des solutions innovantes pour votre entreprise.',
          fontSize: 18,
          textAlign: 'center',
          color: '#666666',
          padding: '40px 20px'
        }
      },
      {
        id: uuidv4(),
        type: 'footer',
        props: {
          text: '© 2024 Mon Site. Tous droits réservés.',
          backgroundColor: '#333333',
          textColor: '#ffffff',
          socialLinks: []
        }
      }
    ]
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    description: 'Portfolio créatif pour artistes et designers',
    preview: '/previews/portfolio.jpg',
    blocks: [
      {
        id: uuidv4(),
        type: 'navbar',
        props: {
          logo: 'Portfolio',
          links: [
            { text: 'Accueil', url: '#home' },
            { text: 'Projets', url: '#projects' },
            { text: 'À propos', url: '#about' },
            { text: 'Contact', url: '#contact' }
          ],
          backgroundColor: '#000000',
          textColor: '#ffffff'
        }
      },
      {
        id: uuidv4(),
        type: 'hero',
        props: {
          title: 'Designer Créatif',
          subtitle: 'Créateur d\'expériences visuelles uniques',
          backgroundImage: '',
          backgroundColor: '#000000',
          textAlign: 'left',
          textColor: '#ffffff'
        }
      },
      {
        id: uuidv4(),
        type: 'card',
        props: {
          title: 'Mes Projets',
          content: 'Découvrez une sélection de mes réalisations',
          image: '',
          buttonText: 'Voir plus',
          buttonUrl: '#projects'
        }
      }
    ]
  },
  {
    id: 'business',
    name: 'Site Business',
    description: 'Site professionnel pour entreprises',
    preview: '/previews/business.jpg',
    blocks: [
      {
        id: uuidv4(),
        type: 'navbar',
        props: {
          logo: 'Entreprise',
          links: [
            { text: 'Accueil', url: '#home' },
            { text: 'Services', url: '#services' },
            { text: 'À propos', url: '#about' },
            { text: 'Contact', url: '#contact' }
          ],
          backgroundColor: '#2F80ED',
          textColor: '#ffffff'
        }
      },
      {
        id: uuidv4(),
        type: 'hero',
        props: {
          title: 'Solutions Professionnelles',
          subtitle: 'Votre partenaire de confiance pour la croissance',
          backgroundColor: '#f8f9fa',
          textAlign: 'center'
        }
      },
      {
        id: uuidv4(),
        type: 'text',
        props: {
          content: 'Nous accompagnons les entreprises dans leur transformation digitale.',
          fontSize: 16,
          textAlign: 'left',
          padding: '30px'
        }
      }
    ]
  },
  {
    id: 'blog',
    name: 'Blog',
    description: 'Template pour blog personnel ou professionnel',
    preview: '/previews/blog.jpg',
    blocks: [
      {
        id: uuidv4(),
        type: 'navbar',
        props: {
          logo: 'Mon Blog',
          links: [
            { text: 'Accueil', url: '#home' },
            { text: 'Articles', url: '#articles' },
            { text: 'À propos', url: '#about' }
          ],
          backgroundColor: '#ffffff',
          textColor: '#333333'
        }
      },
      {
        id: uuidv4(),
        type: 'hero',
        props: {
          title: 'Bienvenue sur mon blog',
          subtitle: 'Partageons nos idées et expériences',
          backgroundColor: '#f0f0f0',
          textAlign: 'center'
        }
      },
      {
        id: uuidv4(),
        type: 'card',
        props: {
          title: 'Dernier Article',
          content: 'Découvrez mon dernier article sur les tendances du web',
          buttonText: 'Lire l\'article'
        }
      }
    ]
  }
]
