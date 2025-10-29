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
  base: '/portfolio',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['Glatharth/alvera-client', 'Glatharth/gitprofile'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
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
          title: 'Dashboard de Gerenciamento',
          description:
            'Fui contratado para desenvolver e colocar em produção um dashboard de gerenciamento para uma guilda profissional de um jogo NFT. O projeto centralizou operações sensíveis (finanças, wallets, progressão de jogadores, leilões) e facilitou drasticamente a entrada de dados. O foco absoluto foi em segurança e performance. Desenvolvi o backend em Go (Golang) e o frontend em React com TypeScript, implementando uma arquitetura segura (DTOs, validações, rate limiting) e uma infraestrutura robusta (Nginx + Cloudflare com SSL Strict) para proteger dados confidenciais.',
          imageUrl: 'https://i.ibb.co/zVKQmNBf/nc.png',
          link: '#', // Projeto privado (contrato)
        },
        {
          title: 'Alvera-Global',
          description:
            'Como fundador e desenvolvedor principal do Alvera-Global, recriei a experiência clássica do MMORPG Tibia. Este projeto foi meu primeiro empreendimento sério na área, onde gerenciei o servidor e auxiliei a comunidade. Foi a experiência adquirida aqui que me deu a base e a credibilidade necessárias para começar a contribuir ativamente com a comunidade OpenTibia (OpenSource).',
          imageUrl: 'https://i.ibb.co/DDVLX1R5/alvera.jpg',
          link: 'https://www.facebook.com/alveraglobal',
        },
        {
          title: 'Pet São João: Aplicativo de Gestão de Animais para Município',
          description:
            'Participei de um projeto universitário em larga escala para a prefeitura da cidade, criando um aplicativo para identidade (RG) e gerenciamento de pets. O sistema incluía carteira de vacinação digital, alertas de campanhas de saúde e um sistema de "perdidos e achados". Minha contribuição principal foi na equipe de infraestrutura, sendo responsável por pesquisar, orçar e propor a arquitetura de cloud (AWS), defendendo tecnicamente a escolha dos serviços (EC2, S3, RDS) para garantir a viabilidade e escalabilidade do projeto.',
          imageUrl:
            'https://github.com/aluisribeiro/petsaojoao-flutter/blob/master/assets/icon/icon.png?raw=true',
          link: 'https://github.com/aluisribeiro/petsaojoao-flutter',
        },
        {
          title: 'Linux From Scratch (LFS)',
          description:
            'LFS é um projeto pessoal de estudo profundo onde construí um sistema Linux completo e personalizado a partir do zero, compilando-o inteiramente a partir do código-fonte. Segui as instruções do projeto para particionar discos, compilar a toolchain (GCC, Glibc, Binutils) e, em seguida, compilar e instalar todos os pacotes de software básicos (kernel, shell, utilitários GNU) para criar um sistema funcional.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/506px-Tux.svg.png',
          link: 'https://www.linkedin.com/pulse/construindo-um-sistema-linux-personalizado-com-from-scratch-lisboa-fahqf/',
        },
        {
          title: 'Modernização de Arquitetura Open-Source',
          description:
            'Como contribuidor principal (desde 2019) de um grande projeto open-source (C++/Lua), identifiquei grandes gargalos de manutenção causados por código legado. Fui o idealizador e um dos principais executores da modernização de sistemas críticos, migrando a arquitetura de XML para um padrão moderno 100% em Lua ("Heavy Script"). Também criei os padrões e as implementações centrais para novas mecânicas de jogo (como alavancas e bosses), hoje utilizados como base pela comunidade.',
          imageUrl:
            'https://raw.githubusercontent.com/opentibiabr/remeres-map-editor/main/rme_icon.ico',
          link: 'https://github.com/glatharth/',
        },
        {
          title: 'Ferramentas de Automação para Migração de Jogos',
          description:
            'Para viabilizar a modernização do ecossistema OpenTibia, criei um conjunto de ferramentas de automação (scripts) para migrar ativos de jogo em larga escala. Desenvolvi conversores que leem formatos de dados antigos (XML, APIs de Wiki) e os transformam automaticamente na nova arquitetura Lua (criaturas, dados da Wiki, IDs de mapa). Essas ferramentas economizaram centenas de horas de trabalho manual da comunidade, permitindo a migração de milhares de arquivos de forma instantânea.',
          imageUrl:
            'https://static.tibia.com/images/community/fansiteitems/TibiaWiki.com.br.gif',
          link: '#', // Link original: [Projetos Open-Source]
        },
        {
          title: 'TibiaGTA',
          description:
            'O TibiaGTA foi um projeto de aprendizado profundo onde explorei a recriação da jogabilidade de Grand Theft Auto (GTA) dentro do motor do OpenTibia. Como desenvolvedor principal, implementei sistemas de jogo customizados em Lua/C++, estabelecendo a fundação técnica que me permitiu, anos depois, liderar projetos mais complexos como o Alvera-Global e a modernização do core open-source.',
          imageUrl: 'https://i.ibb.co/SqZkJD0/tibiaGTA.jpg',
          link: 'https://github.com/Glatharth/TibiaGTA-public',
        },
      ],
    },
  },
  seo: { title: '', description: '', imageURL: '' },
  social: {
    linkedin: 'paulo-henrique-lisboa',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'Glatharth',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: 'Glatharth',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Golang',
    'JavaScript',
    'Node.js',
    'Python',
    'Lua',
    'C',
    'C++',
    'Bash',
    'Docker',
    'Elasticsearch',
    'Kibana',
    'Beats',
    'Logstash',
    'Zabbix',
    'Linux',
    'AWS',
    'GCP',
    'Firewalls',
    'Regex',
    'Git',
    'PHP',
    'Secure Coding',
    'Metasploit',
    'Nmap',
    'Wireshark',
    'Vulnerability Analysis',
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
      to: 'Abril 2025',
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
  certifications: [],
  educations: [
    {
      institution:
        'Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - IFSP',
      degree: 'Bacharelato',
      from: '2025',
      to: '',
    },
    {
      institution: 'UNIFEOB',
      degree: 'Tecnólogo',
      from: '2019',
      to: '2021',
    },
    {
      institution:
        'Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - IFSP',
      degree: 'Técnico',
      from: '2017',
      to: '2018',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

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
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: false,
};

export default CONFIG;
