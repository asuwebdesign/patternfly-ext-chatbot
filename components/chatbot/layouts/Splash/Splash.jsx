// ============================================================================
// Chatbot Layout - Splash
// ============================================================================

import React from 'react'

// Import PatternFly components
import { Spinner } from '@patternfly/react-core'

// Import Chatbot components
import Main from '../../components/Main/Main'

// Import styles
import './Splash.scss'

const Splash = ({ splashLogoSrc, splashLogoAlt }) => {
  return (
    <>
    <Main>
      <div className="pf-chatbot__brand">
        <img src={splashLogoSrc} alt={splashLogoAlt} />
      </div>

      <div className="pf-chatbot__loading"><Spinner aria-label="Connecting to the service" /></div>
    </Main>
    </>
  )
}

export default Splash