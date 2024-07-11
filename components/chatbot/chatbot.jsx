// ============================================================================
// Chatbot
// ============================================================================
import React from 'react'
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

  // Configure animations
  const motionChatbot = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: '16px' }
  }

  return (
    <motion.div
      className={`pf-chatbot ${layout && 'pf-chatbot--layout--' + layout} ${displayMode} ${!chatbotVisible ? 'pf-chatbot--hidden' : ''}`}
      variants={motionChatbot}
      initial="closed"
      animate={chatbotVisible ? "open" : "closed"}
    >
      
      {layout === 'splash' && <Splash {...props} />}
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