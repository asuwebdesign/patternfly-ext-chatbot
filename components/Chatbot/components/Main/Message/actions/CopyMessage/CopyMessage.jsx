// ============================================================================
// Chatbot Main - Message - Actions - Copy
// ============================================================================
import React from 'react'

// Import PatternFly components
import { Button } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'

// Import Chatbot components
import Tooltip from '@/components/Chatbot/components/Tooltip/Tooltip'

// Import styles
import './CopyMessage.scss'

const CopyMessage = () => {

  // Configure tooltips
  const tooltipCopyMessage = React.useRef()

  // Configure handler
  const handleClick = () => {

    // Show toast message. Copy to clipboard (text)
    console.log('Copy response')
  
  }

  return (
    <>
      <Button
        className="pf-chatbot__button pf-chatbot__button--copy"
        variant="plain"
        aria-describedby="pf-chatbot__tooltip--copy"
        ref={tooltipCopyMessage}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faCopy} />
      </Button>
      <Tooltip
        id="pf-chatbot__tooltip--copy"
        content="Copy"
        position="top"
        triggerRef={tooltipCopyMessage} />
    </>
  )
}

export default CopyMessage