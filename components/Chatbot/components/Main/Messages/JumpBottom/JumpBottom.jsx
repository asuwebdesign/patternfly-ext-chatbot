// ============================================================================
// Chatbot Main - Messages - Jump to Bottom
// ============================================================================
import React from 'react'

// Import PatternFly components
import { Button } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

// Import Chatbot components
import Tooltip from '@/components/Chatbot/components/Tooltip/Tooltip'

// Import styles
import './JumpBottom.scss'

const JumpBottom = ({ atBottom, onClick }) => {

  // Configure tooltips
  const tooltipJumpBottom = React.useRef()

  return (
    <>
      <Button
        className={`pf-chatbot__jump--bottom ${atBottom && 'pf-chatbot__jump--bottom--hidden'}`}
        aria-describedby="pf-chatbot__tooltip--jump-bottom"
        ref={tooltipJumpBottom}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faArrowDown} />
      </Button>
      <Tooltip
        id="pf-chatbot__tooltip--jump-bottom"
        content="Skip to bottom"
        position="top"
        triggerRef={tooltipJumpBottom} />
    </>
  )
}

export default JumpBottom