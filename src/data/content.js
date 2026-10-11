// Todo o texto do site mora aqui.
// Pra mudar uma frase, edite este arquivo. Os componentes só leem daqui.
// Tudo que estiver entre [colchetes] ainda precisa ser preenchido.

export const profile = {
  name: 'Isabella Viana',
  role: 'UX/UI & Front-end',
  // Cada item é uma linha do título.
  headline: ['Projeto interfaces e', 'construo o código delas.'],
  intro:
    'Penso em produto, consistência e viabilidade técnica ao mesmo tempo sem tratar o handoff como uma fronteira.',
};

// Faixa de fatos, logo depois dos projetos.
// "agora" fica numa linha própria em cima; formação e dia a dia, embaixo.
export const now = {
  title: 'UX/UI Designer na Alfaneo',
  detail: 'SaaS jurídico com IA · desde set 2025',
  // O texto é uma lista de pedaços: texto solto é normal, { bold } aparece em negrito.
  text: [
    'Criei e implementei ',
    { bold: 'dois design systems' },
    ', com ',
    { bold: 'mais de 40 componentes cada' },
    '. No dia a dia, ',
    { bold: 'implemento as interfaces do produto em código' },
    ', considerando acessibilidade e consistência visual',
  ],
};

export const about = {
  education: 'Análise e Desenvolvimento de Sistemas',
  educationDetail: 'concluída em 2022',
};

// Endereço do GitHub: usado nos cards de projeto e no contato
const github = 'https://github.com/isabellaksviana';

// cover: a palavra grande da capa (é decoração; o título de verdade vem logo abaixo)
export const projects = [
  {
    cover: 'Design System',
    title: 'Design System próprio',
    status: 'Em construção',
    description:
      'Design system em React com tokens, componentes reutilizáveis, Storybook e código aberto.',
    stack: ['React', 'TypeScript', 'Storybook'],
    demo: 'https://ds-lab.isabellaviana.com',
    repo: `${github}/ds-lab`,
  },
  {
    cover: 'Tamagochi',
    title: 'Tamagochi',
    status: 'No ar',
    description:
      'Pet virtual em Vue 3 e TypeScript, com estado reativo e dados salvos no navegador.',
    stack: ['Vue', 'TypeScript', 'Vite'],
    demo: 'https://tamagochi.isabellaviana.com',
    repo: `${github}/tamagochi`,
  },
  {
    cover: 'Portfólio',
    title: 'Este portfólio',
    status: 'No ar',
    description:
      'Portfólio em React e CSS que consome o meu design system como dependência, com tema claro e escuro.',
    stack: ['React', 'Vite', 'CSS'],
    repo: `${github}/portfolio`,
  },
];

// A frase-manifesto é o título da seção. Cada item é uma linha; a segunda aparece em lilás.
export const principles = {
  title: ['Design que dá pra implementar,', 'código que dá pra defender.'],
  items: [
    {
      icon: 'file',
      title: 'A decisão fica escrita',
      text: 'Regras, tokens e componentes documentados no Storybook.',
    },
    {
      icon: 'component',
      title: 'Implementação faz parte da decisão',
      text: 'Testo a ideia no navegador antes de fechar o layout.',
    },
    {
      icon: 'box',
      title: 'Componente é contrato',
      text: 'Props e comportamentos definidos pra quem vai usar.',
    },
    {
      icon: 'check',
      title: 'IA como ferramenta',
      text: 'Faz parte do fluxo; a revisão e a decisão final são minhas.',
    },
  ],
};

// Faixa de fatos: o que eu uso no dia a dia.
export const skills = {
  daily: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Vue 3',
    'Vuetify',
    'Storybook',
    'Git / GitLab',
    'Vite',
    'Figma',
  ],
};

// Rodapé: cada linha vira um rótulo mono.
// Começa com um ícone (icon) ou com uma parte em destaque (highlight), seguido do texto.
export const footer = [
  {
    icon: 'code',
    text: 'feito com react e pelo de gato no teclado',
  },
  { highlight: '© 2026', text: 'todos os direitos reservados' },
];

export const contact = {
  // Cada item é uma linha.
  text: ['Quer conversar sobre uma vaga ou um projeto?', 'Me chama.'],
  links: [
    { label: 'E-mail', href: 'mailto:bellakaroline1@gmail.com', icon: 'mail' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/isabella-viana/',
      icon: 'linkedin',
    },
    { label: 'GitHub', href: github, icon: 'github' },
  ],
};
