// ============================================================================
// Chatbot Main - Message - Actions - Rate Down
// ============================================================================
import React from 'react'

// Import PatternFly components
import { Button } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons'

// Import Chatbot components
import Tooltip from '@/components/Chatbot/components/Tooltip/Tooltip'


// Import styles
import './RateDownMessage.scss'

const RateDownMessage = () => {

  // Configure tooltips
  const tooltipRateDownMessage = React.useRef()

  // Configure handler
  const handleClick = () => {

    // Toggle active state. Toggle form / thank you
    console.log('Bad response')
  
  }

  return (
    <>
      <Button
        className="pf-chatbot__button pf-chatbot__button--rate-down"
        variant="plain"
        aria-describedby="pf-chatbot__tooltip--rate-down"
        ref={tooltipRateDownMessage}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faThumbsDown} />
      </Button>
      <Tooltip
        id="pf-chatbot__tooltip--rate-down"
        content="Bad response"
        position="top"
        triggerRef={tooltipRateDownMessage} />
    </>
  )
}

export default RateDownMessage