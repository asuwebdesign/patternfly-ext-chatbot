"use client"

import React, { useState, useEffect } from 'react'

import Testing from '@/components/testing'


// Import styles
import '@patternfly/react-core/dist/styles/base.css'

import Chatbot from '@/components/Chatbot/Chatbot'
import ChatbotToggle from '@/components/Chatbot/components/ChatbotToggle/ChatbotToggle'

// ============================================================================
// FRONT-END LOGIC
// 
// - Splash (minimum setTimeout or something else)
// - Terms (check useState)
// - Privacy (check useState)
// - Declined (if declined)
// - Onboarding (check useState if enabled)
// - Chat: Welcome
// 
// ============================================================================

const App = () => {

  // Toggle visibility support
  const [chatbotVisible, setChatbotVisible] = useState(true)
  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible)
  }

  // Display mode support
  const [displayMode, setDisplayMode] = useState('')
  const handleDisplay = (className) => {
    setDisplayMode(className)
  }

  // Configure layout
  const splashLogoSrc = 'https://staging-v6.patternfly.org/images/ca43ebed.svg'
  const splashLogoAlt = 'Chatbot logo'

  const termsOfUseTitle = ''
  const termsOfUseAgreement = <>
    Patternfly Privacy Policy
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

    Effective Date: June 20, 2024
  </>

  const privacyStatementTitle = ''
  const privacyStatementAgreement = <>
    Patternfly Privacy Policy
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

    Effective Date: June 20, 2024
  </>

  const declinedLegalTitle = ''
  const declinedLegalContent = ''


  return (
    <div className="app">

      <Testing handleDisplay={handleDisplay} />

      <ChatbotToggle label="Chatbot" chatbotVisible={chatbotVisible} toggleChatbot={toggleChatbot} />

      <Chatbot
        displayMode={displayMode}

        layout="splash"
        
        // layout="terms-of-use"
        // termsOfUseTitle={termsOfUseTitle}
        // termsOfUseAgreement={termsOfUseAgreement}

        // layout="privacy-statement"
        // privacyStatementTitle={privacyStatementTitle}
        // privacyStatementAgreement={privacyStatementAgreement}

        // layout="declined-legal"
        // declinedLegalTitle={declinedLegalTitle}
        // declinedLegalContent={declinedLegalContent}

        // layout="onboarding"

        // layout="chat"

        chatbotVisible={chatbotVisible}
      />

    </div>
  )
}

export default App