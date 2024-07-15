// ============================================================================
// Chatbot Main - Messages - Jump to Top
// ============================================================================
import React from 'react'

// Import PatternFly components
import { Button } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

// Import Chatbot components
import Tooltip from '@/components/Chatbot/components/Tooltip/Tooltip'

// Import styles
import './JumpTop.scss'

const JumpTop = ({ atTop, onClick }) => {

  // Configure tooltips
  const tooltipJumpTop = React.useRef()

  return (
    <>
      <Button
        className={`pf-chatbot__jump--top ${atTop && 'pf-chatbot__jump--top--hidden'}`}
        aria-describedby="pf-chatbot__tooltip--jump-top"
        ref={tooltipJumpTop}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>
      <Tooltip
        id="pf-chatbot__tooltip--jump-top"
        content="Back to top"
        position="top"
        triggerRef={tooltipJumpTop} />
    </>
  )
}

export default JumpTop