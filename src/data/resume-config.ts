import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Maud Julmy',
    photoBackEmoji: '🎯',
    title: {
      fr: 'Product Owner / Transformation digitale - Centrée utilisateur',
      en: 'Product Owner / Digital transformation - User-centered',
    },
    subtitle: {
      fr: 'UX strategy, Analyst, Human-centered design',
      en: 'UX strategy, Analyst, Human-centered design',
    },
    location: 'Vuisternens-en-Ogoz, Suisse',
  },
  seo: {
    title: 'Maud Julmy — Product Owner UX',
    description: 'CV interactif de Maud Julmy, Product Owner spécialisée en UX, innovation et gestion de projets de transformation digitale.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },
  contact: [
    { type: 'email', label: 'maudpoulin@gmail.com' },
    { type: 'phone', label: '+41 76 226 21 99' },
    { type: 'linkedin', label: 'Maud Julmy', href: 'https://linkedin.com/in/maud-julmy-3647b136' },
    { type: 'location', label: 'Vuisternens-en-Ogoz, Suisse' },
    { type: 'location', label: 'Née le 27/04/1993 à Saint-Priest (France)' },
    { type: 'location', label: 'Mariée, 1 enfant' },
    { type: 'location', label: 'Permis de séjour B' },
  ],
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Langue maternelle', en: 'Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Professionnel courant', en: 'Professional' } },
        { name: { fr: 'Allemand', en: 'German' }, level: { fr: 'En cours d\'apprentissage', en: 'Currently learning' } },
      ],
    },
    {
      title: { fr: 'UX & Product', en: 'UX & Product' },
      type: 'text',
      items: [
        { name: { fr: 'Analyse des besoins et de l\'activité, spécifications utilisateurs, Design Sprint, ateliers d\'idéation, tests utilisateurs et A/B, échelles d\'évaluation UX, cartographie du parcours utilisateur', en: 'User needs analysis, user specifications, Design Sprint, ideation workshops, user testing and A/B testing, UX evaluation scales, user journey map' } },
      ],
    },
    {
      title: { fr: 'Gestion de projet', en: 'Project Management' },
      type: 'text',
      items: [
        { name: { fr: 'Gantt, Kanban, analyse de risques, user stories, cahier des charges, backlog produit, roadmap, priorisation et estimation des efforts', en: 'Gantt, Kanban, risk analysis, user stories, specifications, product backlog, roadmap, prioritization and effort estimation' } },
      ],
    },
    {
      title: { fr: 'Psychologie & Facteurs humains', en: 'Psychology & Human Factors' },
      type: 'text',
      items: [
        { name: { fr: 'Facteurs humains, biais cognitifs, perception, engagement, design persuasif', en: 'Human factors, cognitive biases, perception, engagement, persuasive design' } },
      ],
    },
    {
      title: { fr: 'Outils & Technologies', en: 'Tools & Technologies' },
      type: 'badges',
      items: [
        { name: 'R' },
        { name: 'SPSS' },
        { name: 'Jamovi' },
        { name: 'Power BI' },
        { name: 'Figma' },
        { name: 'Adobe XD' },
        { name: 'Balsamiq' },
        { name: 'SolidWorks' },
        { name: 'Miro' },
        { name: 'Notion' },
        { name: 'Microsoft 365' },
        { name: 'LaTeX' },
      ],
    },
    {
      title: { fr: 'Qualités', en: 'Soft Skills' },
      type: 'text',
      items: [
        { name: { fr: 'Fédératrice, proactive, organisée, curieuse, dynamique, ambitieuse, persévérante, excellente communication, pont humain-tech-métier', en: 'Collaborative leader, proactive, organized, curious, dynamic, ambitious, resilient, strong communication skills, link human-tech-business' } },
      ],
    },
    {
      title: { fr: 'Méthodologie', en: 'Methods' },
      type: 'text',
      items: [
        { name: { fr: 'CCU, Design thinking, Agile/Scrum', en: 'UCD, Design thinking, Agile/Scrum' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'hearc',
      company: { fr: 'HE-Arc Neuchâtel', en: 'HE-Arc Neuchâtel' },
      role: { fr: 'Adjointe scientifique', en: 'Scientific Associate' },
      type: { fr: 'CDI', en: 'CDI' },
      period: { fr: '2021 - Aujourd\'hui', en: '2021 - Present' },
      description: {
        fr: 'Recherche appliquée en conception centrée utilisateur et gestion de projets innovants. Représentante du Corps Intermédiaire du domaine ingénierie au niveau du Conseil du Personnel. Membre du jury de recrutement du Directeur Général en 2024',
        en: 'Applied research in user-centred design and innovation project management. Representative of the Intermediate Corps in the engineering field at the Staff Council level. Member of the recruitment panel for the Chief Executive Officer in 2024',
      },
      techs: ['Figma', 'Miro', 'R', 'SPSS', 'Notion', 'Meta Quest Headset', 'Unity'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Groupe User-Centred Product Design.',
          en: 'User-Centred Product Design research group.',
        },
        tasks: {
          fr: [
            'Montage et gestion de projets de recherche',
            'UX research et spécifications produits',
            'Design vision, design service, customer journey, storyboard, design sprint workshop', 
            'Prototypage et tests utilisateurs',
            'Suivi des bug et priorisation des tâches',
            'Enseignement UX design Bachelor',
            'Management des assistants de recherche',
          ],
          en: [
            'Research project setup and management',
            'UX research and product specifications',
            'Design vision, design service, customer journey, storyboard, design sprint workshop',
            'Prototyping and user testing',
            'Bug tracking and task prioritisation',
            'Bachelor UX design teaching',
            'Research assistant supervision',
          ],
        },
        env: {
          fr: 'Figma / Miro / Méthodologies UX / Design thinking / Gestion de projet',
          en: 'Figma / Miro / UX methodologies / Design thinking / Project management',
        },
      },
    },
    {
      id: 'phd',
      company: { fr: 'Grenoble INP', en: 'Grenoble INP' },
      role: { fr: 'Doctorante en Génie Industriel', en: 'PhD Candidate in Industrial Engineering' },
      type: { fr: 'CDD', en: 'CDD' },
      period: { fr: '2018 - 2021', en: '2018 - 2021' },
      description: {
        fr: 'Thèse sur l\'amélioration du processus de co-conception via la Réalité Augmentée Spatiale.',
        en: 'PhD thesis on improving co-design processes using Spatial Augmented Reality.',
      },
      techs: ['R', 'SPSS', 'Unity'],
      details: {
         context: {
           fr: 'Etude de l\'impact de la technologie de réalité visrtuelle sur la génération d\'idée et sur la prise de décision.',
          en: 'Studying effects of SAR techonoly on idea generation and decision making.',
        },
        tasks: {
          fr: [
            'Animation de Design Sprints et entretiens',
            'Collaboration internationale (Espagne, UK, Italie)',
            'Organisation de webinaires pendant la Covid-19',
            '3 ans d\'enseignement universitaire (Statistiques et Management de la connaissance)',
          ],
          en: [
            'Design Sprint facilitation and interviews',
            'International collaboration (Spain, UK, Italy)',
            'Webinar organization during Covid-19',
            '3 years of university teaching (Statistics and Knowledge Management)',
          ],
        },
        env: {
          fr: 'R / SPSS / Unity / Méthodes expérimentales',
          en: 'R / SPSS / Unity / Experimental methods',
        },
      },
    },
    {
      id: 'spark',
      company: { fr: 'Laboratoire G-SCOP', en: 'G-SCOP Lab' },
      role: { fr: 'Ingénieure ergonome', en: 'Ergonomics Engineer' },
      type: { fr: 'Projet Européen SPARK H2020', en: 'European Project SPARK H2020' },
      period: { fr: '2017 - 2018', en: '2017 - 2018' },
      description: {
        fr: 'Conception d\'une plateforme de Réalité Augmentée Spatiale pour la co-conception.',
        en: 'Design of a Spatial Augmented Reality platform for co-design.',
      },
      techs: [],
            details: {
         context: {
          fr: 'Etude des gestes dans le processus de conception.',
          en: 'Studying gesture during iteratives phases of design process',
        },
        tasks: {
          fr: [
            'Observations et analyse des séances de revues de projet',
            'Collaboration internationale (Espagne, UK, Italie)',
          ],
          en: [
            'Observation and analyse of design reviews',
            'International collaboration (Spain, UK, Italy)',
          ],
        },
        env: {
          fr: 'SAR',
          en: 'SAR',
        },
      },
    },
    {
      id: 'cameraman',
      company: { fr: 'Indépendante', en: 'Freelance' },
      role: { fr: 'Cameraman sportive', en: 'Sports Camerawoman' },
      type: { fr: 'Indépendante', en: 'Freelance' },
      period: { fr: '2014 - 2018', en: '2014 - 2018' },
      description: {
        fr: 'Cameraman indépendante dans le milieu équestre.',
        en: 'Freelance sports camerawoman in the equestrian field.',
      },
      techs: [],
      details: {
         context: {
          fr: 'FEI CSI et SHF',
          en: 'FEI CSI and SHF',
        },
        tasks: {
          fr: [
            'Mise en place du matériel',
            'Cadrage et redifusion en live',
          ],
          en: [
            'Equipment installation',
            'live framing and broadcasting',
          ],
        },
        env: {
          fr: 'International',
          en: 'International',
        },
      },
    },
  ],
  education: [
   {
      school: { fr: 'Formation HERMES Foundation', en: 'HERMES Foundation Training' },
      degree: { fr: 'En cours', en: 'In progress' },
      period: '2026',
    },
    {
      school: { fr: 'Certification Design Sprint Master Class', en: 'Design Sprint Master Class Certification' },
      degree: { fr: 'Certification', en: 'Certification' },
      period: '2023',
    },
    {
      school: { fr: 'Grenoble INP', en: 'Grenoble INP' },
      degree: { fr: 'Doctorat en Génie Industriel', en: 'PhD in Industrial Engineering' },
      period: '2018 - 2021',
    },
    {
      school: { fr: 'Université de Dijon', en: 'University of Dijon' },
      degree: { fr: 'Master Psychologie - Ingénierie de la formation et ergonomie', en: 'Master in Psychology - Training Engineering and Ergonomics' },
      period: '2015 - 2017',
    },
    {
      school: { fr: 'Université Clermont-Ferrand', en: 'University of Clermont-Ferrand' },
      degree: { fr: 'Licence de Psychologie', en: 'Bachelor in Psychology' },
      period: '2011 - 2014',
    },
  ],
  hobbies: [
    {
      title: { fr: 'Sports & Nature', en: 'Sports & Nature' },
      details: [
        { fr: 'Randonnée pédestre et vélo', en: 'Hiking and cycling' },
        { fr: 'Ski alpin, ski de randonnée, telemark', en: 'Alpine skiing, ski touring, telemark' },
        { fr: 'Natation et natation en eau libre', en: 'Swimming and open water swimming' },
        { fr: 'Équitation', en: 'Horse riding' },
      ],
    },
  ],
  theme: { preset: 'ocean' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'PROFESSIONAL EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main responsibilities:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to see more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}
