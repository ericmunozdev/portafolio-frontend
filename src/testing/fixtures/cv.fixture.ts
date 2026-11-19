import type { iCV } from '../../app/core/domain/cv.model';

/** Datos ficticios: no contiene información personal real. */
export const CV_FIXTURE: iCV = {
  profile: {
    id: 'demo',
    webTitle: 'Portafolio de pruebas',
    fullName: 'Usuario Demo',
    workPosition: 'Desarrollador',
    presentation: 'Datos anonimizados para pruebas unitarias.',
  },
  contact: [
    {
      typeIcon: 'email',
      typeName: 'Email',
      displayName: 'demo@example.com',
      value: 'mailto:demo@example.com',
      position: 1,
    },
  ],
  education: [
    { title: 'Grado Demo', institution: 'Universidad Demo', graduationYear: 2020 },
  ],
  categorySkill: [
    {
      category: 'Backend',
      skills: [
        {
          icon: null,
          name: 'C#',
          children: [{ icon: null, name: '.NET', children: [] }],
        },
      ],
    },
  ],
  experience: [
    {
      company: 'Empresa Demo',
      role: 'Desarrollador',
      startDate: '2020-01',
      endDate: '2022-01',
      responsibility: 'Tareas de ejemplo',
      collapse: false,
      skills: [],
    },
  ],
  projectSkill: [{ project: 'Proyecto Demo', skills: [] }],
  additionalSkill: [{ content: 'Conocimientos de ejemplo', skills: [] }],
  other: [{ text: 'Español', description: 'Nativo' }],
};
