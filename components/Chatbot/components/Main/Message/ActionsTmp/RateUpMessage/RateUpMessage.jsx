// ============================================================================
// Chatbot Main - Message - Actions - Rate Up
// ============================================================================
import React from 'react'

// Import PatternFly components
import { Button } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'

// Import Chatbot components
import Tooltip from '@/components/Chatbot/components/Tooltip/Tooltip'

// Import styles
import './RateUpMessage.scss'

const RateUpMessage = () => {

  // Configure tooltips
  const tooltipRateUpMessage = React.useRef()

  // Configure handler
  const handleClick = () => {

    // Toggle active state. Toggle form / thank you
    console.log('Good response')
  
  }

  return (
    <>
      <Button
        className="pf-chatbot__button pf-chatbot__button--rate-up"
        variant="plain"
        aria-describedby="pf-chatbot__tooltip--rate-up"
        ref={tooltipRateUpMessage}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </Button>
      <Tooltip
        id="pf-chatbot__tooltip--rate-up"
        content="Good response"
        position="top"
        triggerRef={tooltipRateUpMessage} />
    </>
  )
}

export default RateUpMessage