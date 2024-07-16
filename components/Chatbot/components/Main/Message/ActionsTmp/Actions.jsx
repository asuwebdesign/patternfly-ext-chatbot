// ============================================================================
// Chatbot Main - Message - Actions
// ============================================================================
import React from 'react'

// Import Chatbot components
import RateUpMessage from './RateUpMessage/RateUpMessage'
import RateDownMessage from './RateDownMessage/RateDownMessage'
import CopyMessage from './CopyMessage/CopyMessage'
import ListenMessage from './ListenMessage/ListenMessage'

// Import styles
import './Actions.scss'

const Actions = () => {
  return (
    <div className="pf-chatbot__message-actions">
      <RateUpMessage />
      <RateDownMessage />
      <CopyMessage />
      <ListenMessage />
    </div>
  )
}

export default Actions