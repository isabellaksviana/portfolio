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

// Formação: aparece na faixa de fatos, entre a Experiência e o Como eu trabalho.
export const about = {
  education: 'Análise e Desenvolvimento de Sistemas',
  educationDetail: 'concluída em 2022',
};

export const experience = [
  {
    company: 'Alfaneo',
    role: 'UX/UI Designer Pleno',
    period: 'set 2025 — atual',
    context: 'SaaS jurídico com IA',
    items: [
      'Criei e implementei em código dois Design Systems, documentados no Storybook. O primeiro virou a biblioteca compartilhada do time de engenharia; o segundo nasceu como pacote versionado e é a base da nova geração de produtos.',
      'Estruturei os tokens em camadas, separando paleta e significado, com temas claro e escuro e convenções de uso documentadas.',
      'Implemento telas a partir das histórias de usuário, com um contrato de dados que permite ao desenvolvimento conectar a lógica sem reescrever a interface.',
      'Considero acessibilidade nas decisões de interface, incluindo contraste, legibilidade, zoom e adaptação dos componentes ao espaço disponível.',
      'Refino requisitos com produto e engenharia, definindo fluxos, padrões e estados de interface.',
    ],
  },
  {
    company: 'Globoo',
    role: 'UX/UI Designer',
    period: 'mar 2025 — set 2025',
    context: 'Fintech',
    items: [
      'Redesenhei o aplicativo inteiro, reestruturando os fluxos principais pra melhorar a navegação e a usabilidade.',
      'Como única pessoa de UX, conduzi as decisões de interface de ponta a ponta, em contato direto com o desenvolvimento.',
      'Criei a base visual do produto, com padrões reutilizáveis e protótipos de alta fidelidade.',
    ],
  },
];

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
      text: 'Ninguém precisa adivinhar o porquê.',
    },
    {
      icon: 'component',
      title: 'Implementação faz parte da decisão',
      text: 'O que desenho precisa fazer sentido no código.',
    },
    {
      icon: 'box',
      title: 'Componente é contrato',
      text: 'API pensada pra quem vai usar.',
    },
    {
      icon: 'check',
      title: 'IA como ferramenta',
      text: 'O critério de revisão é meu.',
    },
  ],
};

// Faixa entre a Experiência e o Como eu trabalho: formação + o que eu uso no dia a dia.
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
