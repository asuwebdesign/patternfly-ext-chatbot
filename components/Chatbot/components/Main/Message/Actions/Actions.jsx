// ============================================================================
// Chatbot Main - Message - Actions
// ============================================================================
import React, { useState } from 'react'

// Import Chatbot components
import RateUpMessage from './RateUpMessage/RateUpMessage'
import RateDownMessage from './RateDownMessage/RateDownMessage'
import CopyMessage from './CopyMessage/CopyMessage'
import ListenMessage from './ListenMessage/ListenMessage'
import FeedbackForm from './FeedbackForm/FeedbackForm'

// Import styles
import './Actions.scss'

const Actions = ({ addAlert }) => {

  // display feedback form
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)

  return (
    <>
      <div className="pf-chatbot__message-actions">
        <RateUpMessage addAlert={addAlert} />
        <RateDownMessage addAlert={addAlert} />
        <CopyMessage addAlert={addAlert} />
        <ListenMessage addAlert={addAlert} />
      </div>
      {showFeedbackForm && <FeedbackForm />}
    </>
  )
}

export default Actions