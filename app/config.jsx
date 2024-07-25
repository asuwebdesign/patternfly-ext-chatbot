const chatbotConfig = {

  // Global config
  // --------------------------------------------------------------------------
  global: {
    // brand: {
    //   lightTheme: {
    //     src: 'https://staging-v6.patternfly.org/images/f18506f4.svg',
    //     alt: 'PatternFly Logo'
    //   },
    //   darkTheme: {
    //     src: 'https://staging-v6.patternfly.org/images/ca43ebed.svg',
    //     alt: 'PatternFly Logo'
    //   }
    // },
    display: {
      default: 'float'
    },
    menu: {
      show: true,
      items: []
    },
    options: {
      show: true,
      items: []
    }
  },

  // Splash config
  // --------------------------------------------------------------------------
  splash: {
    // show: true,
    // lightTheme: {
    //   src: '/bg-splash.jpg',
    //   alt: 'Abstract and soft blue gradients on light background'
    // },
    // darkTheme: {
    //   src: '/bg-splash-dark.jpg',
    //   alt: 'Abstract and soft blue gradients on dark background'
    // },
  },

  // Terms of Use config
  // --------------------------------------------------------------------------
  termsOfUse: {
    show: true,
    title: 'Terms of use',
    content: `Patternfly Privacy Policy
    Introduction
    Welcome to Patternfly. We value your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and share information when you use our services. By using our website, mobile application, or any of our services, you agree to the terms outlined in this policy.

    Information We Collect
    Personal Information
    When you interact with Patternfly, we may collect personal information, including but not limited to:

    Name
    Email address
    Phone number
    Mailing address
    Payment information
    Non-Personal Information
    We also collect non-personal information that cannot be used to identify you individually. This includes:

    Browser type
    IP address
    Device information
    Pages visited
    Time spent on our site
    Cookies and Tracking Technologies
    We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us understand user behavior, remember your preferences, and improve our services.

    How We Use Your Information
    Patternfly uses the information we collect for various purposes, including:

    Providing and maintaining our services
    Processing transactions and sending related information
    Improving our website and services
    Communicating with you, including sending updates and promotional materials
    Ensuring security and preventing fraud
    Complying with legal obligations
    Sharing Your Information
    We do not sell your personal information. However, we may share your information with third parties in the following circumstances:

    With your consent
    With service providers who perform services on our behalf
    For legal reasons, such as complying with legal obligations or protecting our rights
    Data Security
    We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, or misuse. However, no system is completely secure, and we cannot guarantee absolute security.

    Your Rights
    Depending on your location, you may have certain rights regarding your personal data, including:

    Accessing your data
    Correcting inaccurate data
    Deleting your data
    Objecting to data processing
    Restricting data processing
    Data portability
    To exercise your rights, please contact us using the information provided below.

    Changes to This Privacy Policy
    We may update this privacy policy from time to time. When we do, we will post the updated policy on our website and update the policy's effective date. We encourage you to review this policy periodically.

    Contact Us
    If you have any questions or concerns about this privacy policy or our data practices, please contact us at:

    Patternfly
    Email: privacy@patternfly.com
    Address: 123 Privacy Lane, Anytown, USA

    Effective Date: June 20, 2024`
  },

  // Privacy Statement config
  // --------------------------------------------------------------------------
  privacyStatement: {
    show: true,
    title: 'Privacy statement',
    content: `Patternfly Privacy Policy
    Introduction
    Welcome to Patternfly. We value your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and share information when you use our services. By using our website, mobile application, or any of our services, you agree to the terms outlined in this policy.

    Information We Collect
    Personal Information
    When you interact with Patternfly, we may collect personal information, including but not limited to:

    Name
    Email address
    Phone number
    Mailing address
    Payment information
    Non-Personal Information
    We also collect non-personal information that cannot be used to identify you individually. This includes:

    Browser type
    IP address
    Device information
    Pages visited
    Time spent on our site
    Cookies and Tracking Technologies
    We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us understand user behavior, remember your preferences, and improve our services.

    How We Use Your Information
    Patternfly uses the information we collect for various purposes, including:

    Providing and maintaining our services
    Processing transactions and sending related information
    Improving our website and services
    Communicating with you, including sending updates and promotional materials
    Ensuring security and preventing fraud
    Complying with legal obligations
    Sharing Your Information
    We do not sell your personal information. However, we may share your information with third parties in the following circumstances:

    With your consent
    With service providers who perform services on our behalf
    For legal reasons, such as complying with legal obligations or protecting our rights
    Data Security
    We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, or misuse. However, no system is completely secure, and we cannot guarantee absolute security.

    Your Rights
    Depending on your location, you may have certain rights regarding your personal data, including:

    Accessing your data
    Correcting inaccurate data
    Deleting your data
    Objecting to data processing
    Restricting data processing
    Data portability
    To exercise your rights, please contact us using the information provided below.

    Changes to This Privacy Policy
    We may update this privacy policy from time to time. When we do, we will post the updated policy on our website and update the policy's effective date. We encourage you to review this policy periodically.

    Contact Us
    If you have any questions or concerns about this privacy policy or our data practices, please contact us at:

    Patternfly
    Email: privacy@patternfly.com
    Address: 123 Privacy Lane, Anytown, USA

    Effective Date: June 20, 2024`
  },

  // Declined agreements config
  // --------------------------------------------------------------------------
  declinedLegal: {
    show: true,
    title: 'Acceptance required',
    content: `We're sorry, but to use our app, you need to accept our Terms of Use and Privacy Statement. We understand that these agreements are important to you. These agreements are essential for providing you with our services and ensuring your data is protected.`,
    primaryButton: {
      label: 'Review agreements'
    },
    secondaryButton: {
      show: true,
      label: 'Learn more',
      url: 'https://www.redhat.com/'
    },
    tertiaryButton: {
      show: true,
      label: 'Contact customer support',
      url: 'https://www.redhat.com/'
    },
  },

  // Onboarding config
  // --------------------------------------------------------------------------
  onboarding: {
    show: true,
    features: [
      {
        photo: 'https://cdn.dribbble.com/userupload/15673045/file/original-463ff248823b210040f9a6f19fb4b017.png?resize=1504x1128',
        title: 'Feature 1',
        description: 'Description of Feature 1.',
      },
      {
        photo: 'https://cdn.dribbble.com/userupload/15672299/file/original-dd87de7b073f07b6794fd083eaff9e7a.png?resize=1504x1128',
        title: 'Feature 2',
        description: 'Description of Feature 2.',
      },
      {
        photo: 'https://cdn.dribbble.com/userupload/15666808/file/original-a9ec72266c73d50998f078963fd1d5c5.png?resize=2048x1537',
        title: 'Feature 3',
        description: 'Description of Feature 3.',
      },
    ]
  },

  // Chat config
  // --------------------------------------------------------------------------
  chat: {
    userName: 'Johnny Smith',
    userAvatar: '',
    userAvatarAlt: '',
  
    botName: 'Red Hat Lightspeed',
    botAvatar: '',
    botAvatarAlt: '',

    // enable speech-to-text
    // enable attachments ... menu, editable

    // menu drawer items
    // option menu items

    footnote: {
      show: true,
      label: 'Lightspeed uses AI. Check for mistakes.',
      popover: {
        show: true,
        image: {
          show: true,
          src: 'https://cdn.dribbble.com/userupload/10651749/file/original-8a07b8e39d9e8bf002358c66fce1223e.gif',
          alt: 'Example image for footnote popover'
        },
        title: 'Verify accuracy',
        desc: `While Lightspeed strives for accuracy, there's always a possibility of errors. It's a good practice to verify critical information from reliable sources, especially if it's crucial for decision-making or actions.`,
        link: {
          show: true,
          label: 'Learn more',
          url: 'https://www.redhat.com/'
        }
      }
    },
  },

}

export default chatbotConfig