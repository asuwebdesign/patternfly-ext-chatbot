// ============================================================================
// Chatbot Main - Message - Content - Quick Reply
// ============================================================================
import React from 'react'

// Import PatternFly components
import { Label } from '@patternfly/react-core'

// Import styles
import './QuickReplyMessage.scss'

const QuickReplyMessage = ({ stacked, items }) => {

  // Configure handlers
  const handleClick = () => {

    console.log('quick reply clicked')
    // Take value and submit a new message as user with value

  }

  return (
    <div className={`pf-chatbot__message-quick-reply ${stacked && 'pf-chatbot__message-quick-reply--stacked'}`}>
      {items.map((item, index) => (
        <Label key={index} color="blue" variant="outline" onClick={handleClick}>{item}</Label>
      ))}      
    </div>
  )
}

export default QuickReplyMessage