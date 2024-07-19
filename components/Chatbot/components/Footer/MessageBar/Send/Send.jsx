// ============================================================================
// Chatbot Footer - Message Bar - Send
// ============================================================================
import React from 'react'

// Import PatternFly components
import { Button } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

// Import Chatbot components
import Tooltip from '../../../Tooltip/Tooltip'

// Import styles
import './Send.scss'

const Send = ({ value, handleSend }) => {

  // Configure tooltip
  const tooltipSendMessageRef = React.useRef()

  return (
    <>
      <Button
        className={`pf-chatbot__button--send ${value ? 'pf-chatbot__button--visible' : 'pf-chatbot__button--hidden'}`}
        variant="plain"
        aria-describedby="pf-chatbot__tooltip--send"
        ref={tooltipSendMessageRef}
        onClick={() => handleSend()}
      ><FontAwesomeIcon icon={faPaperPlane} /></Button>
      <Tooltip id="pf-chatbot__tooltip--send" content="Send" position="top" triggerRef={tooltipSendMessageRef} />
    </>
  )
}

export default Send