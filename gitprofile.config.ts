// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Glatharth', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['Glatharth/alvera-client'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Linux from scratch',
          description:
            'Linux From Scratch (LFS) é um projeto que fornece instruções passo a passo para construir seu próprio sistema Linux personalizado, inteiramente a partir do código-fonte.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/506px-Tux.svg.png',
          link: 'https://www.linuxfromscratch.org/',
        },
        {
          title: 'Alvera-Global',
          description:
            'Alvera-Global é um projeto de OpenTibia, onde tivemos como ideia principal recriar o conteúdo do clássico jogo MMORPG Tibia. Nosso foco é proporcionar uma jogabilidade similar, focando em manter os sistemas os mais próximos possíveis do jogo original.',
          link: 'https://www.facebook.com/alveraglobal',
        },
        {
          title: 'Conversor de sintaxe para arquivos de criaturas no OpenTibia',
          description:
            'O projeto consiste em um conversor de sintaxe para arquivos de criaturas no OpenTibia, onde o usuário pode converter arquivos de criaturas de um projeto opensource para outro, sem a necessidade de fazer manualmente.',
          imageUrl:
            'https://static.tibia.com/images/global/header/background-artwork.webp',
          link: '#',
        },
        {
          title: 'Conversor de informações do TibiaWiki para o OpenTibia',
          description:
            'O projeto consome a API do TibiaWiki para obter informações sobre criaturas, items e mapa, e converte essas informações para sintaxe do OpenTibia, onde o usuário pode baixar os arquivos gerados.',
          imageUrl:
            'https://static.tibia.com/images/community/fansiteitems/TibiaWiki.com.br.gif',
          link: 'https://tibia.fandom.com/',
        },
        {
          title: 'Conversor de mapa no OpenTibia',
          description:
            'Quando um mapa precisa ser convertido de um ID para o outro é extremamente trabalhoso, pois é necessário fazer manualmente. Esse projeto tem como objetivo converter mapas de determinado ID para outro, sem a necessidade de fazer manualmente.',
          imageUrl:
            'https://raw.githubusercontent.com/opentibiabr/remeres-map-editor/main/rme_icon.ico',
          link: 'https://tibia.fandom.com/',
        },
        {
          title: 'TibiaGTA',
          description:
            'O TibiaGTA é um projeto de OpenTibia, onde tive como ideia principal recriar o conteúdo do clássico jogo Grand Theft Auto (GTA). Nosso foco é proporcionar uma jogabilidade similar, focando em manter os sistemas os mais próximos possíveis do jogo original.',
          link: 'https://github.com/Glatharth/TibiaGTA-public',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Paulo Lisboa',
    description: '',
    imageURL: 'https://avatars.githubusercontent.com/u/39601778?v=4',
  },
  social: {
    linkedin: 'paulo-henrique-lisboa',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+55 (19) 9 9123-3671',
    email: 'phlinho10@gmail.com',
    discord: 'Glatharth',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Golang',
    'JavaScript',
    'Python',
    'Lua',
    'Bash',
    'Docker',
    'Elasticsearch',
    'Kibana',
    'Beats',
    'Logstash',
    'Zabbix',
    'Linux',
    'AWS',
    'regex',
    'GCP',
    'Git',
    'PHP',
    'Ruby on Rails',
  ],
  experiences: [
    {
      company: 'Wave Connect Internet',
      position: 'Suporte Técnico',
      from: 'Abril 2019',
      to: 'Outubro 2022',
      companyLink: 'https://sh2.com.br/',
    },
    {
      company: 'Alvera-Global',
      position: 'Desenvolvedor',
      from: 'Maio 2020',
      to: 'Atualmente',
      companyLink: 'https://www.facebook.com/alveraglobal',
    },
    {
      company: 'OpenTibiaBR',
      position: 'Desenvolvedor',
      from: 'Maio 2020',
      to: 'Atualmente',
      companyLink: 'https://github.com/opentibiabr',
    },
  ],
  certifications: [
    {
      name: 'Programação básica em Ruby on Rails',
      body: '',
      year: 'Junho - 2019',
      link: '',
    },
    {
      name: 'Desenvolvendo Jogos 2 Mobile',
      body: '',
      year: 'Fevereiro - 2019',
      link: '',
    },
    {
      name: 'Unifeob Hackathon 2019',
      body: 'Primeiro lugar no Hackathon realizado na Unifeob',
      year: 'Agosto - 2019',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'UNIFEOB',
      degree: 'Tecnólogo',
      from: '2019',
      to: '2021',
    },
    {
      institution: 'Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - IFSP',
      degree: 'Técnico',
      from: '2017',
      to: '2018',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
