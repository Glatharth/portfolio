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
          title: 'Management Dashboard',
          description:
            'I was hired to develop and deploy a management dashboard for a professional NFT game guild. The project centralized sensitive operations (finances, wallets, player progression, auctions) and drastically facilitated data entry. The absolute focus was on security and performance. I developed the backend in Go (Golang) and the frontend in React with TypeScript, implementing a secure architecture (DTOs, validations, rate limiting) and a robust infrastructure (Nginx + Cloudflare with SSL Strict) to protect confidential data.',
          imageUrl: 'https://i.ibb.co/zVKQmNBf/nc.png',
          link: '#', // Private project (contract)
        },
        {
          title: 'Alvera-Global',
          description:
            'As the founder and main developer of Alvera-Global, I recreated the classic MMORPG Tibia experience. This project was my first serious venture in the field, where I managed the server and assisted the community. It was the experience gained here that gave me the foundation and credibility needed to start actively contributing to the OpenTibia (OpenSource) community.',
          imageUrl: 'https://i.ibb.co/DDVLX1R5/alvera.jpg',
          link: 'https://www.facebook.com/alveraglobal',
        },
        {
          title: 'Pet São João: Pet Management Application for Municipality',
          description:
            'I participated in a large-scale university project for the city hall, creating an application for pet identification (ID) and management. The system included a digital vaccination card, health campaign alerts, and a "lost and found" system. My main contribution was on the infrastructure team, where I was responsible for researching, budgeting, and proposing the cloud architecture (AWS), technically defending the choice of services (EC2, S3, RDS) to ensure the project\'s viability and scalability.',
          imageUrl:
            'https://github.com/aluisribeiro/petsaojoao-flutter/blob/master/assets/icon/icon.png?raw=true',
          link: 'https://github.com/aluisribeiro/petsaojoao-flutter',
        },
        {
          title: 'Linux From Scratch (LFS)',
          description:
            "LFS is a personal deep-study project where I built a complete and custom Linux system from scratch, compiling it entirely from the source code. I followed the project's instructions to partition disks, compile the toolchain (GCC, Glibc, Binutils), and then compile and install all the basic software packages (kernel, shell, GNU utilities) to create a functional system.",
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/506px-Tux.svg.png',
          link: 'https://www.linkedin.com/pulse/construindo-um-sistema-linux-personalizado-com-from-scratch-lisboa-fahqf/',
        },
        {
          title: 'Open-Source Architecture Modernization',
          description:
            'As a main contributor (since 2019) to a large open-source project (C++/Lua), I identified major maintenance bottlenecks caused by legacy code. I was the creator and one of the main executors of the modernization of critical systems, migrating the architecture from XML to a modern 100% Lua standard ("Heavy Script"). I also created the standards and core implementations for new game mechanics (like levers and bosses), which are now used as a base by the community.',
          imageUrl:
            'https://raw.githubusercontent.com/opentibiabr/remeres-map-editor/main/rme_icon.ico',
          link: 'https://github.com/glatharth/',
        },
        {
          title: 'Automation Tools for Game Migration',
          description:
            'To enable the modernization of the OpenTibia ecosystem, I created a set of automation tools (scripts) to migrate game assets on a large scale. I developed converters that read old data formats (XML, Wiki APIs) and automatically transform them into the new Lua architecture (creatures, Wiki data, map IDs). These tools saved the community hundreds of hours of manual labor, allowing for the instant migration of thousands of files.',
          imageUrl:
            'https://static.tibia.com/images/community/fansiteitems/TibiaWiki.com.br.gif',
          link: '#', // Original link: [Open-Source Projects]
        },
        {
          title: 'TibiaGTA',
          description:
            'TibiaGTA was a deep-learning project where I explored recreating the gameplay of Grand Theft Auto (GTA) within the OpenTibia engine. As the main developer, I implemented custom game systems in Lua/C++, establishing the technical foundation that allowed me, years later, to lead more complex projects like Alvera-Global and the modernization of the open-source core.',
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
      position: 'Technical Support',
      from: 'April 2019',
      to: 'October 2022',
      companyLink: 'https://sh2.com.br/',
    },
    {
      company: 'Alvera-Global',
      position: 'Developer',
      from: 'May 2020',
      to: 'April 2025',
      companyLink: 'https://www.facebook.com/alveraglobal',
    },
    {
      company: 'OpenTibiaBR',
      position: 'Developer',
      from: 'May 2020',
      to: 'Present',
      companyLink: 'https://github.com/opentibiabr',
    },
  ],
  certifications: [],
  educations: [
    {
      institution:
        'Federal Institute of Education, Science and Technology of São Paulo - IFSP',
      degree: "Bachelor's Degree",
      from: '2025',
      to: '',
    },
    {
      institution: 'UNIFEOB',
      degree: 'Technologist Degree',
      from: '2019',
      to: '2021',
    },
    {
      institution:
        'Federal Institute of Education, Science and Technology of São Paulo - IFSP',
      degree: 'Technical Degree',
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
