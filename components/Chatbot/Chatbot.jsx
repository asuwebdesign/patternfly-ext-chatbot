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

const Chatbot = ({ displayMode, layout, chatbotVisible, ...props }) => {

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

  return (
    <motion.div
      className={`pf-chatbot ${layout && 'pf-chatbot--layout--' + layout} ${displayMode} ${!chatbotVisible ? 'pf-chatbot--hidden' : ''}`}
      variants={motionChatbot}
      initial="hidden"
      animate={chatbotVisible ? "visible" : "hidden"}
    >
      
      {layout === 'splash' && <Splash chatbotVisible={chatbotVisible} {...props} />}
      {layout === 'terms-of-use' && <TermsOfUse {...props} />}
      {layout === 'privacy-statement' && <PrivacyStatement {...props} />}
      {layout === 'declined-legal' && <DeclinedLegal {...props} />}
      {layout === 'onboarding' && <Onboarding {...props} />}
      {layout === 'chat' && <Chat {...props} />}

      {/* Or add a custom layout... */}

    </motion.div>
  )
}

export default Chatbot