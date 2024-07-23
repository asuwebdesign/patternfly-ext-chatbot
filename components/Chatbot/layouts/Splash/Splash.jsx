// ============================================================================
// Chatbot Layout - Splash
// ============================================================================
import React from 'react'
import { motion } from 'framer-motion'

// Import PatternFly components
import { Spinner } from '@patternfly/react-core'

// Import Chatbot components
import Main from '../../components/Main/Main'

// Import styles
import './Splash.scss'

const Splash = ({ config, chatbotVisible }) => {

  const { logo } = config.splash

  // Configure animations
  const motionBrand = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '16px' }
  }

  return (
    <>
      <Main>
        {logo.src && logo.alt && (
          <motion.div className="pf-chatbot__brand" variants={motionBrand} initial="hidden" animate={chatbotVisible ? "visible" : "hidden"}>
            <img src={logo.src} alt={logo.alt} />
          </motion.div>
        )}

        <div className="pf-chatbot__loading"><Spinner aria-label="Connecting to the service" /></div>
      </Main>
    </>
  )
}

export default Splash