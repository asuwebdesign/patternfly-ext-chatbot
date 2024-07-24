// ============================================================================
// Chatbot Brand
// ============================================================================
import React from 'react'

// Import PatternFly components
import { Brand as PatternflyBrand } from '@patternfly/react-core'

// Import Chatbot components
import useDarkMode from '../../useDarkMode'

// Import styles
import './Brand.scss'

const Brand = ({ config={} }) => {

  // Configure default values
  const {
    brand = {
      lightTheme: {
        src: 'https://staging-v6.patternfly.org/images/f18506f4.svg',
        alt: 'PatternFly Logo'
      },
      darkTheme: {
        src: 'https://staging-v6.patternfly.org/images/ca43ebed.svg',
        alt: 'PatternFly Logo'
      }
    }
  } = config.global || {}

  // Detect dark mode
  const isDarkMode = useDarkMode()

  return (
    <PatternflyBrand src={isDarkMode ? brand.darkTheme.src : brand.lightTheme.src} alt={isDarkMode ? brand.darkTheme.alt : brand.lightTheme.alt} />
  )
}

export default Brand