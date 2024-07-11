// ============================================================================
// Chatbot Toggle
// ============================================================================

import React from 'react'

// Import PatternFly components
import { Button } from '@patternfly/react-core'

// Import Chatbot components
import Tooltip from '../Tooltip/Tooltip'
import Icon from './Icon'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

// Import styles
import './ChatbotToggle.scss'

const ChatbotToggle = ({ label, chatbotVisible, toggleChatbot }) => {

  // Configure icon
  const icon = chatbotVisible ? <FontAwesomeIcon icon={faAngleDown} /> : <Icon />

  // Configure tooltips
  const tooltipRef = React.useRef()

  return (
    <>
      <Button
        className={`pf-chatbot__button pf-chatbot__button--toggle-chatbot ${chatbotVisible ? 'pf-chatbot__button--active' : ''}`}
        variant="plain"
        aria-describedby="pf-chatbot__tooltip--toggle-chatbot"
        ref={tooltipRef}
        onClick={toggleChatbot}
      >
        {icon}
        {/* Notification dot placeholder */}
      </Button>
      <Tooltip
        id="pf-chatbot__tooltip--toggle-chatbot"
        className="pf-chatbot__tooltip"
        content={label}
        position="top-end"
        triggerRef={tooltipRef} />
    </>
  )
}

export default ChatbotToggle