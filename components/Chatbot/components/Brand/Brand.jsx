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

  const {
    brand = {
      srcLight: 'https://staging-v6.patternfly.org/images/f18506f4.svg',
      srcDark: 'https://staging-v6.patternfly.org/images/ca43ebed.svg',
      alt: 'PatternFly Logo'
    }
  } = config.global || {}

  // Detect dark mode
  const isDarkMode = useDarkMode()

  return (
    <PatternflyBrand src={isDarkMode ? brand.srcDark : brand.srcLight} alt={brand.alt} />
  )
}

export default Brand