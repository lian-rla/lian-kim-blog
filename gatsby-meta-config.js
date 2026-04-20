module.exports = {
  title: `lian-kim.com`,
  description: `개발자 김민재`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.lian-kim.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `김민재`,
    nickname: 'lian',
    stack: ['Backend', 'Pytorch', 'Python'],
    bio: {
      email: `minjae260314@gmail.com`,
      residence: 'Seoul, South Korea',
      bachelorDegree: 'Gachon Univ. Medical Engineering (2021.03-2026.02)',
      role: '개발자',
      description: ['Backend', 'Pytorch', 'AI', 'Python'],
      thumbnail: 'sample.png',
    },
    social: {
      github: `https://github.com/lian-rla`,
      linkedIn: ``,
      email: `minjae260314@gmail.com`,
    },
    dropdown: {
      naver: 'https://blog.naver.com/lian_rla',
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // ===== 🚫 Don't erase this sample =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // =======================================
    ],

    career: [
      // ===== 나중에 경력 추가 시 아래 형식 참고 =====
      // {
      //   title: '회사명',
      //   date: '2024.01 ~ 현재',
      //   description: '포지션 / 팀명',
      // },
      {
        title: 'Baarn PNT 바른피앤티',
        date: '2024.08.05 ~ 2026.01.01',
        description: 'BTL Marketer',
      },
    ],

    activity: [
      {
        title: 'Lee Lab SNU BCS',
        date: '2025.06 ~ 2025.12',
        description: 'Undergraduate researcher',
      },

    ],

    projects: [
      // ===== 🚫 Don't erase this sample =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // =======================================
    ],
  },
};
