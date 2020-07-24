export const STEPS = {
  start: 0,
  first: 1,
  second: 2,
  third: 3
}

export const SECTOR_TYPES = {
  LAB: 'lab',
  CLINIC: 'clinic',
  OWNER: 'owner'
}

export const SECTOR_TYPES_TRANSLATION = {
  lab: 'Laboratório',
  clinic: 'Clínica',
  owner: 'Proprietário'
}

export const STEPS_DATA = {
  first: {
    text: '<b>Cuide</b> e <b>Aumente</b> a <b>receita</b> do seu <b>Laboratório</b>. Ofereça à seus clientes um ambiente <b>seguro</b> e <b>eficaz</b>.',
    images: {
      lab: {
        img: '/lab.svg'
      },
      option2: {
        img: '/step1option2.svg'
      }
    },
    items: [{ value: SECTOR_TYPES.LAB, text: 'Cuidar do laboratório' }, { value: 'option2', text: 'Opção 2' }]
  },
  second: {
    text: '<b>Cuide, monitore</b> seu pequeno e tenha acesso aos melhores profissionais veterinários de todo território Nacional. Em um ambiente 100% seguro e <b>gratuito</b>.',
    images: {
      owner: {
        img: '/owner.svg'
      },
      option2: {
        img: '/step1option2.svg'
      }
    },
    items: [{ value: SECTOR_TYPES.OWNER, text: 'Cuidar do meu animal' }, { value: 'option2', text: 'Opção 2' }]
  },
  third: {
    text: '<b>Gerencie</b> sua Clínica e ainda tenha acesso a centenas Laboratórios veterinários pelo Brasil. Em um ambiente 100% seguro e <b>escalável</b>.',
    images: {
      clinic: {
        img: '/clinic.svg'
      },
      option2: {
        img: '/step1option2.svg'
      }
    },
    items: [{ value: SECTOR_TYPES.CLINIC, text: 'Cuidar da minha clinica' }, { value: 'option2', text: 'Opção 2' }]
  }
}
