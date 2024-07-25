// ============================================================================
// Chatbot Layout - Chat - Welcome
// ============================================================================
import React from 'react'

// Import styles
import './Welcome.scss'
import { Content, ContentVariants } from '@patternfly/react-core'

const Welcome = () => {
  return (
    <div className="pf-chatbot--layout--welcome">
      <Content component={ContentVariants.h1}>Hello</Content>
    </div>
  )
}

export default Welcome