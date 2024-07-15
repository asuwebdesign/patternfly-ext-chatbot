// ============================================================================
// Chatbot Footer - Message Bar
// ============================================================================

import React, { useRef } from 'react'

import { AutoTextArea } from 'react-textarea-auto-witdth-height'

// Import PatternFly components
import { Button } from '@patternfly/react-core'

// Import Chatbot components
import Tooltip from '../../Tooltip/Tooltip'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faMicrophone, faStop, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

// Import styles
import './MessageBar.scss'

const MessageBar = () => {

  // Configure tooltips
  const tooltipAttachRef = React.useRef()
  const tooltipUseMicrophoneRef = React.useRef()
  const tooltipUseStopRef = React.useRef()
  const tooltipSendMessageRef = React.useRef()

  // Configure states
  const componentRef = useRef(null)
  const textareaRef = useRef(null)
  const actionsRef = useRef(null)

  const [value, setValue] = React.useState('')


  // Configure handlers
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleAttach = () => { console.log('Attach button clicked') }
  const handleUseMicrophone = () => { console.log('Use mic button clicked') }
  const handleStop = () => { console.log('Stop button clicked') }

  const handleSend = () => {
    console.log('Send button clicked')
    setValue('')
  }

  return (
    <div className="pf-chatbot__message-bar" ref={componentRef}>

      <AutoTextArea
        className="pf-chatbot__message-textarea"
        value={value}
        onChange={handleChange}
        placeholder="Send a message..."
        aria-label="Send a message..." />

      <div ref={actionsRef} className="pf-chatbot__message-bar-actions">
        {/* Attach file or show popover menu */}
        <Button
          variant="plain"
          aria-describedby="pf-chatbot__tooltip--attach"
          ref={tooltipAttachRef}
          onClick={() => handleAttach()}
        ><FontAwesomeIcon icon={faPaperclip} /></Button>
        <Tooltip id="pf-chatbot__tooltip--attach" content="Attach" position="top" triggerRef={tooltipAttachRef} />

        {/* Use microphone for voice input */}
        <Button
          variant="plain"
          aria-describedby="pf-chatbot__tooltip--use-microphone"
          ref={tooltipUseMicrophoneRef}
          onClick={() => handleUseMicrophone()}
        ><FontAwesomeIcon icon={faMicrophone} /></Button>
        <Tooltip id="pf-chatbot__tooltip--use-microphone" content="Use microphone" position="top" triggerRef={tooltipUseMicrophoneRef} />

        {/* Stop bot from responding */}
        {/* <Button
          aria-describedby="pf-chatbot__tooltip--stop"
          ref={tooltipUseStopRef}
          onClick={() => handleStop()}
        ><FontAwesomeIcon icon={faStop} /></Button> */}
        {/* <Tooltip id="pf-chatbot__tooltip--stop" content="Stop" position="top" triggerRef={tooltipUseStopRef} /> */}

        {/* Send message */}
        {value && <>
          <Button
            className={`pf-chatbot__button--send ${value ? 'pf-chatbot__button--visible' : 'pf-chatbot__button--hidden'}`}
            variant="plain"
            aria-describedby="pf-chatbot__tooltip--send"
            ref={tooltipSendMessageRef}
            onClick={() => handleSend()}
          ><FontAwesomeIcon icon={faPaperPlane} /></Button>
          <Tooltip id="pf-chatbot__tooltip--send" content="Send" position="top" triggerRef={tooltipSendMessageRef} />
        </>}
      </div>
    </div>
  )
}

export default MessageBar