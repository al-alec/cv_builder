import { Cv } from '~/types/freecv';

export const cvSettingTemplate: Cv = {
  jobTitle: 'Directeur adjoint du département des parcs',
  name: 'John',
  lastName: 'Doe',
  email: 'johndoe@gmail.com',
  location: 'Lomé, Togo',
  phoneNumber: '+228 99 86 15 61',
  aboutme:
    "Mon nom est John Doe. Je suis un employé du gouvernement passionné et ambitieux qui croit que le premier travail du gouvernement est de servir les gens. En associant les bonnes personnes au bon message au bon moment, le service des parcs et votre administration locale peuvent rendre le monde meilleur pour tous ! J'ai rencontré Joe Biden, et un jour je deviendrai le président des États-Unis.",
  jobSkills: ['Microsoft', 'Word', 'Excel', 'PerfectMind'],
  softSkills: ['Positivité', 'Leadership', 'Parole en publique'],
  languages: [{ lang: 'Francais', level: '100%' }],
  linkedin: '',
  twitter: '',
  github: '',
  website: '',
  education: [
    {
      title: "Génie Logiciel et Système d'informations",
      location: 'Lomé, Togo',
      from: new Date(2017, 9, 1),
      to: new Date(2020, 4, 1),
      current: false,
      summary: 'Lorem ipsum',
    },
  ],
  work: [
    {
      title: 'Directeur adjoint du département des parcs',
      location: 'Lomé, Togo',
      from: new Date(2021, 1, 1),
      to: new Date(2022, 1, 1),
      current: true,
      summary: `- Sed ut lorem viverra urna malesuada interdum in ut risus.
- Duis at sem non justo aliquam iaculis.
- Quisque lobortis nibh non turpis interdum ornare.
- Sed et diam nec arcu tempor suscipit sit amet at tellus.
- Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.`,
    },
    {
      title: 'Dévéloppeur junior',
      location: 'Lomé, Togp',
      from: new Date(2012, 1, 1),
      to: new Date(),
      current: true,
      summary: `- In placerat nisi pellentesque felis blandit, vel varius justo eleifend.
- Etiam porttitor tortor vel lobortis ultricies.
- Nam non libero accumsan, sagittis nibh vitae, auctor ligula.
- Sed hendrerit dui a ante porttitor, vitae tristique ipsum laoreet.
- Suspendisse interdum mauris a lectus dignissim, vitae aliquet ante tempor.`,
    },
  ],
  projects: [
    {
      title: 'Lorem',
      location: 'Lomé, Togo',
      from: new Date(2009, 1, 1),
      to: new Date(2012, 1, 1),
      current: true,
      summary: `- Sed ut lorem viverra urna malesuada interdum in ut risus.
- Duis at sem non justo aliquam iaculis.
- Quisque lobortis nibh non turpis interdum ornare.
- Sed et diam nec arcu tempor suscipit sit amet at tellus.
- Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.`,
    },
  ],
  displayEducation: true,
  displayProjects: false,
  activeColor: '#5B21B6',
};

export const cvSettingsEmptyTemplate: Cv = {
  jobTitle: '',
  name: '',
  lastName: '',
  email: '',
  location: '',
  phoneNumber: '',
  aboutme: '',
  jobSkills: [],
  softSkills: [],
  languages: [],
  linkedin: '',
  twitter: '',
  github: '',
  website: '',
  education: [
    {
      title: '',
      location: '',
      from: new Date(),
      to: new Date(),
      current: true,
      summary: '',
    },
  ],
  work: [
    {
      title: '',
      location: '',
      from: new Date(),
      to: new Date(),
      current: true,
      summary: '',
    },
  ],
  projects: [
    {
      title: '',
      location: '',
      from: new Date(),
      to: new Date(),
      current: true,
      summary: '',
    },
  ],
  displayEducation: true,
  displayProjects: false,
  activeColor: '#5B21B6',
};
