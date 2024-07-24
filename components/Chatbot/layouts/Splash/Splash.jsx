// ============================================================================
// Chatbot Layout - Splash
// ============================================================================
import React from 'react'
import { motion } from 'framer-motion'

// Import PatternFly components
import { Spinner } from '@patternfly/react-core'

// Import Chatbot components
import Main from '../../components/Main/Main'
import Brand from '../../components/Brand/Brand'
import useDarkMode from '../../useDarkMode'

// Import styles
import './Splash.scss'

const Splash = ({ config, chatbotVisible }) => {

  // Configure default values
  const {
    background = {
      show: true,
      lightTheme: {
        src: '/bg-splash.jpg',
        alt: 'Abstract and soft blue gradients on light background'
      },
      darkTheme: {
        src: '/bg-splash-dark.jpg',
        alt: 'Abstract and soft blue gradients on dark background'
      },
    }
  } = config.splash

  // Detect dark mode
  const isDarkMode = useDarkMode()

  // Configure animations
  const motionBrand = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '16px' }
  }

  return (
    <>
      <Main>
        <motion.div className="pf-chatbot__brand" variants={motionBrand} initial="hidden" animate={chatbotVisible ? "visible" : "hidden"}>
          <Brand config={config} />
        </motion.div>

        <div className="pf-chatbot__loading"><Spinner aria-label="Connecting to the service" /></div>

        {background.show && (
          <div className="pf-chatbot__background">
            <img src={isDarkMode ? background.darkTheme.src : background.lightTheme.src} alt={isDarkMode ? background.darkTheme.alt : background.lightTheme.alt} />
          </div>
        )}
      </Main>
    </>
  )
}

export default Splash