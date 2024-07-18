const chatbotConfig = {

  // Global config

  // Splash config
  splash: {
    show: true,
    logo: {
      src: '/logo-chatbot--inverted.svg',
      alt: 'Red Hat Lightspeed logo'
    },
    background: ''
  },

  // Terms of Use config
  termsOfUse: {
    show: true,
    title: '',
    content: ''
  },

  // Privacy Statement config
  privacyStatement: {
    show: true,
    title: '',
    content: ''
  },

  // Declined agreements config
  declinedLegal: {
    show: true,
    title: '',
    content: '',
    primaryButton: {
      label: 'Review agreements'
    },
    secondaryButton: {
      show: true,
      label: 'Learn more',
      url: ''
    },
    tertiaryButton: {
      show: true,
      label: 'Contact customer support',
      url: ''
    },
  },

  // Onboarding config
  showOnboarding: {
    show: true,
    content: [
      {
        image: {
          url: '',
          alt: ''
        },
        title: '',
        desc: ''
      },
      {
        image: {
          url: '',
          alt: ''
        },
        title: '',
        desc: ''
      },
      {
        image: {
          url: '',
          alt: ''
        },
        title: '',
        desc: ''
      }
    ]
  },

  // Chat config
  chat: {
    userName: 'Johnny Smith',
    userAvatar: '',
    userAvatarAlt: '',
  
    botName: 'Red Hat Lightspeed',
    botAvatar: '',
    botAvatarAlt: '',
  
    footnote: {
      show: true,
      label: '',
      popover: {
        show: true,
        image: {
          show: true,
          src: '',
          alt: ''
        },
        title: '',
        desc: ''
      }
    },
  },

}

export default chatbotConfig