// ============================================================================
// Chatbot
// ============================================================================
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Import Chatbot components
import Chat from './layouts/Chat/Chat'
import DeclinedLegal from './layouts/DeclinedLegal/DeclinedLegal'
import Onboarding from './layouts/Onboarding/Onboarding'
import PrivacyStatement from './layouts/PrivacyStatement/PrivacyStatement'
import Splash from './layouts/Splash/Splash'
import TermsOfUse from './layouts/TermsOfUse/TermsOfUse'
import Gutter from './components/Gutter/Gutter'

// Import styles
import './Chatbot.scss'

const Chatbot = ({ config, layout, chatbotVisible = true, isEmbedded, ...props }) => {

  // Configure display modes
  const [displayMode, setDisplayMode] = useState(isEmbedded ? 'pf-chatbot--embedded' : '')
  
  // Switch display modes
  const handleDisplayModeChange = (mode) => {
    setDisplayMode(mode);
  }

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

  // Dock mode configuration
  // const [dockWidth, setDockWidth] = useState(480)

  // const updateWidth = (newWidth) => {
  //   if (newWidth < 480) {
  //     newWidth = 480
  //   } else if (newWidth > 960) {
  //     newWidth = 960
  //   }
  //   setDockWidth(newWidth)
  //   document.documentElement.style.paddingRight = `${newWidth}px`
  // }

  return (
    <motion.div
      className={`pf-chatbot ${layout && 'pf-chatbot--layout--' + layout} ${displayMode} ${!chatbotVisible ? 'pf-chatbot--hidden' : ''}`}
      variants={motionChatbot}
      initial="hidden"
      animate={chatbotVisible ? "visible" : "hidden"}
      //style={displayMode === 'pf-chatbot--docked' ? { width: `${dockWidth}px` } : ''}
    >
      
      {layout === 'splash' && <Splash config={config} chatbotVisible={chatbotVisible} {...props} />}
      {layout === 'terms-of-use' && <TermsOfUse config={config} {...props} />}
      {layout === 'privacy-statement' && <PrivacyStatement config={config} {...props} />}
      {layout === 'declined-legal' && <DeclinedLegal config={config} {...props} />}
      {layout === 'onboarding' && <Onboarding config={config} onSkip={handleSkip} {...props} />}
      {layout === 'chat' && <Chat config={config} displayMode={displayMode} onModeChange={handleDisplayModeChange} {...props} />}

      {/* Or add a custom layout... */}

      {/* {displayMode === 'pf-chatbot--docked' && <Gutter chatbotVisible={chatbotVisible} updateWidth={updateWidth} />} */}

    </motion.div>
  )
}

export default Chatbot