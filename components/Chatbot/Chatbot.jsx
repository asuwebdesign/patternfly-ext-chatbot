// ============================================================================
// Chatbot
// ============================================================================
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

// Import Chatbot components
import Chat from './layouts/Chat/Chat'
import DeclinedLegal from './layouts/DeclinedLegal/DeclinedLegal'
import Onboarding from './layouts/Onboarding/Onboarding'
import PrivacyStatement from './layouts/PrivacyStatement/PrivacyStatement'
import Splash from './layouts/Splash/Splash'
import TermsOfUse from './layouts/TermsOfUse/TermsOfUse'

// Import styles
import './Chatbot.scss'

const Chatbot = ({ config, displayMode, layout, chatbotVisible, ...props }) => {

  // Configure routing
  //
  // - Splash default. Set timeout
  // - Terms. IsAccepted? No => Decline
  // - Privacy. IsAccepted? No => Decline
  // - Onboarding. Available? Cookie-based?
  // - Chat. TermsAccepted. PrivacyAccepted.

  // Configure docked mode
  useEffect(() => {
    if (displayMode === 'pf-chatbot--docked') {
      document.documentElement.classList.add('pf-chatbot-allow--docked')
    } else {
      document.documentElement.classList.remove('pf-chatbot-allow--docked')
    }
  }, [displayMode])

  // Configure animations
  const motionChatbot = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '16px' }
  }

  // Configure handlers
  const handleSkip = () => {
    console.log('Skipped onboarding')
  }

  return (
    <motion.div
      className={`pf-chatbot ${layout && 'pf-chatbot--layout--' + layout} ${displayMode} ${!chatbotVisible ? 'pf-chatbot--hidden' : ''}`}
      variants={motionChatbot}
      initial="hidden"
      animate={chatbotVisible ? "visible" : "hidden"}
    >
      
      {layout === 'splash' && <Splash config={config} chatbotVisible={chatbotVisible} {...props} />}
      {layout === 'terms-of-use' && <TermsOfUse config={config} {...props} />}
      {layout === 'privacy-statement' && <PrivacyStatement config={config} {...props} />}
      {layout === 'declined-legal' && <DeclinedLegal config={config} {...props} />}
      {layout === 'onboarding' && <Onboarding config={config} onSkip={handleSkip} {...props} />}
      {layout === 'chat' && <Chat config={config} {...props} />}

      {/* Or add a custom layout... */}

    </motion.div>
  )
}

export default Chatbot