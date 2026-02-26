import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Maud Julmy',
    photoBackEmoji: '🎯',
    title: {
      fr: 'Product Manager',
      en: 'Product Manager',
    },
    subtitle: {
      fr: 'Produits numériques, UX et innovation',
      en: 'Digital products, UX and innovation',
    },
    location: 'Vuisternens-en-Ogoz, Suisse',
  },
  seo: {
    title: 'Maud Julmy — Product Manager',
    description: 'CV interactif de Maud Julmy, Product Manager spécialisée en UX, innovation et gestion de projets de recherche.',
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
    { type: 'location', label: 'Née le 27/04/1993 à Saint-Priest (France) / Born April 27, 1993 in Saint-Priest (France)' },
    { type: 'location', label: 'Mariée, 1 enfant / Married, 1 child' },
    { type: 'location', label: 'Permis B et BE / Driving licence B and BE' },
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
        { name: { fr: 'Analyse des besoins et de l\'activité, spécifications utilisateurs, Design Sprint, ateliers d\'idéation, tests utilisateurs et A/B, échelles d\'évaluation UX', en: 'User needs analysis, user specifications, Design Sprint, ideation workshops, user testing and A/B testing, UX evaluation scales' } },
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
        { name: 'Matlab' },
        { name: 'SQL' },
        { name: 'Figma' },
        { name: 'Adobe XD' },
        { name: 'Balsamiq' },
        { name: 'SolidWorks' },
        { name: 'Keyshot' },
        { name: 'Miro' },
        { name: 'FigJam' },
        { name: 'Microsoft 365' },
        { name: 'LaTeX' },
      ],
    },
    {
      title: { fr: 'Qualités', en: 'Soft Skills' },
      type: 'text',
      items: [
        { name: { fr: 'Fédératrice, proactive, organisée, curieuse, dynamique, ambitieuse, persévérante, excellente communication', en: 'Collaborative leader, proactive, organized, curious, dynamic, ambitious, resilient, strong communication skills' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'hearc',
      company: { fr: 'HE-Arc Neuchâtel', en: 'HE-Arc Neuchâtel' },
      role: { fr: 'Adjointe scientifique', en: 'Scientific Associate' },
      type: { fr: 'Poste académique', en: 'Academic position' },
      period: { fr: '2021 - Aujourd\'hui', en: '2021 - Present' },
      description: {
        fr: 'Recherche appliquée en conception centrée utilisateur et gestion de projets innovants.',
        en: 'Applied research in user-centred design and innovation project management.',
      },
      techs: ['Figma', 'Miro', 'R', 'SPSS'],
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
            'Prototypage et tests utilisateurs',
            'Enseignement UX design Bachelor',
            'Management des assistants de recherche',
          ],
          en: [
            'Research project setup and management',
            'UX research and product specifications',
            'Prototyping and user testing',
            'Bachelor UX design teaching',
            'Research assistant supervision',
          ],
        },
        env: {
          fr: 'Figma / Miro / Méthodologies UX / Gestion de projet',
          en: 'Figma / Miro / UX methodologies / Project management',
        },
      },
    },
    {
      id: 'phd',
      company: { fr: 'Grenoble INP', en: 'Grenoble INP' },
      role: { fr: 'Doctorante en Génie Industriel', en: 'PhD Candidate in Industrial Engineering' },
      type: { fr: 'Doctorat', en: 'PhD' },
      period: { fr: '2018 - 2021', en: '2018 - 2021' },
      description: {
        fr: 'Thèse sur l\'amélioration du processus de co-conception via la Réalité Augmentée Spatiale.',
        en: 'PhD thesis on improving co-design processes using Spatial Augmented Reality.',
      },
      techs: ['R', 'SPSS', 'Matlab'],
      details: {
        context: {
          fr: 'Laboratoire G-SCOP, collaborations internationales.',
          en: 'G-SCOP laboratory, international collaborations.',
        },
        tasks: {
          fr: [
            'Animation de Design Sprints et entretiens',
            'Organisation de webinaires pendant la Covid-19',
            '3 ans d\'enseignement universitaire',
          ],
          en: [
            'Design Sprint facilitation and interviews',
            'Webinar organization during Covid-19',
            '3 years of university teaching',
          ],
        },
        env: {
          fr: 'R / SPSS / Matlab / Méthodes expérimentales',
          en: 'R / SPSS / Matlab / Experimental methods',
        },
      },
    },
  ],
  education: [],
  projects: [],
  hobbies: [],
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
