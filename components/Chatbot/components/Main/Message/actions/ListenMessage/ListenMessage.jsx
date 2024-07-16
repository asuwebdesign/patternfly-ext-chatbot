// ============================================================================
// Chatbot Main - Message - Actions - Listen
// ============================================================================
import React from 'react'

// Import PatternFly components
import { Button } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

// Import Chatbot components
import Tooltip from '@/components/Chatbot/components/Tooltip/Tooltip'

// Import styles
import './ListenMessage.scss'

const ListenMessage = () => {

  // Configure tooltips
  const tooltipListenMessage = React.useRef()

  // Configure handler
  const handleClick = () => {

    // Toggle active state. Enable text-to-voice on message
    console.log('Listen to message')
  
  }

  return (
    <>
      <Button
        className="pf-chatbot__button pf-chatbot__button--listen"
        variant="plain"
        aria-describedby="pf-chatbot__tooltip--listen"
        ref={tooltipListenMessage}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faVolumeHigh} />
      </Button>
      <Tooltip
        id="pf-chatbot__tooltip--listen"
        content="Listen"
        position="top"
        triggerRef={tooltipListenMessage} />
    </>
  )
}

export default ListenMessage