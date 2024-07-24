// ============================================================================
// Chatbot Main - Message - Content - Text
// ============================================================================

import React from 'react'

// Import styles
import './TextMessage.scss'
import { Content, ContentVariants } from '@patternfly/react-core'

const TextMessage = ({ text }) => {
  return (
    <div className="pf-chatbot__message-text">
      <Content component={ContentVariants.p}>{text}</Content>
    </div>
  )
}

export default TextMessage