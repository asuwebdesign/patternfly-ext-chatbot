// ============================================================================
// Chatbot Footer - Message Bar - Attach
// ============================================================================
import React from 'react'

// Import PatternFly components
import { Button } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'

// Import Chatbot components
import Tooltip from '../../../Tooltip/Tooltip'

// Import styles
import './Attach.scss'

const Attach = ({ handleAttach, isDisabled }) => {

  // Configure tooltip
  const tooltipAttachRef = React.useRef()

  return (
    <>
      <Button
        ref={tooltipAttachRef}
        variant="plain"
        className="pf-chatbot__button--attach"
        aria-describedby="pf-chatbot__tooltip--attach"
        isDisabled={isDisabled}
        onClick={() => handleAttach()}
      ><FontAwesomeIcon icon={faPaperclip} /></Button>
      <Tooltip id="pf-chatbot__tooltip--attach" content="Attach" position="top" triggerRef={tooltipAttachRef} />
    </>
  )
}

export default Attach