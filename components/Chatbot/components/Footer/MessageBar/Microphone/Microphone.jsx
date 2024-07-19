// ============================================================================
// Chatbot Footer - Message Bar - Microphone
// ============================================================================
import React from 'react'

// Import PatternFly components
import { Button } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

// Import Chatbot components
import Tooltip from '../../../Tooltip/Tooltip'

// Import styles
import './Microphone.scss'

const Microphone = ({ listening, startListening, stopListening }) => {

  // Configure tooltip
  const tooltipUseMicrophoneRef = React.useRef()

  return (
    <>
      <Button
        ref={tooltipUseMicrophoneRef}
        variant="plain"
        className={`pf-chatbot__button--microphone ${listening ? 'pf-chatbot__button--microphone--active' : ''}`}
        aria-describedby="pf-chatbot__tooltip--use-microphone"        
        onClick={listening ? stopListening : startListening}
      ><FontAwesomeIcon icon={faMicrophone} /></Button>
      <Tooltip id="pf-chatbot__tooltip--use-microphone" content={listening ? 'Stop listening' : 'Use microphone'} position="top" triggerRef={tooltipUseMicrophoneRef} />
    </>
  )
}

export default Microphone