// ============================================================================
// Chatbot Footer - Message Bar
// ============================================================================

import React, { useState } from 'react'

// Import PatternFly components
import { TextArea, Button } from '@patternfly/react-core'

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
  const [value, setValue] = React.useState()

  // Configure handlers
  const handleAttach = () => { console.log('Attach button clicked') }
  const handleUseMicrophone = () => { console.log('Use mic button clicked') }
  const handleStop = () => { console.log('Stop button clicked') }
  const handleSend = () => { console.log('Send button clicked') }

  return (
    <div className="pf-chatbot__message-bar">
      
      {/* <div>Attachment chip</div> */}

      <TextArea
        value={value}
        placeholder="Send a message..."
        type="text"
        onChange={(_event, value) => setValue(value)}
        aria-label="text input"
        resizeOrientation="none"
        autoResize
      />

      <div className="">
        <Button
          variant="plain"
          aria-describedby="pf-chatbot__tooltip--attach"
          ref={tooltipAttachRef}
          onClick={() => handleAttach()}
        ><FontAwesomeIcon icon={faPaperclip} /></Button>

        <Button
          variant="plain"
          aria-describedby="pf-chatbot__tooltip--use-microphone"
          ref={tooltipUseMicrophoneRef}
          onClick={() => handleUseMicrophone()}
        ><FontAwesomeIcon icon={faMicrophone} /></Button>

        <Button
          aria-describedby="pf-chatbot__tooltip--stop"
          ref={tooltipUseStopRef}
          onClick={() => handleStop()}
        ><FontAwesomeIcon icon={faStop} /></Button>

        <Button
          aria-describedby="pf-chatbot__tooltip--send-message"
          ref={tooltipSendMessageRef}
          onClick={() => handleSend()}
        ><FontAwesomeIcon icon={faPaperPlane} /></Button>
      </div>

      <Tooltip id="pf-chatbot__tooltip--attach" content="Attach" position="top" triggerRef={tooltipAttachRef} />
      <Tooltip id="pf-chatbot__tooltip--use-microphone" content="Use microphone" position="top" triggerRef={tooltipUseMicrophoneRef} />
      <Tooltip id="pf-chatbot__tooltip--stop" content="Stop" position="top" triggerRef={tooltipUseStopRef} />
      <Tooltip id="pf-chatbot__tooltip--send-message" content="Send" position="top" triggerRef={tooltipSendMessageRef} />
    </div>
  )
}

export default MessageBar

// DETECT OVERLAP => STACK INPUT EFFECT
//
// const InputComponent = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [isOverlapping, setIsOverlapping] = useState(false);
//   const inputRef = useRef(null);
//   const buttonsRef = useRef(null);

//   useEffect(() => {
//     const checkOverlap = () => {
//       if (inputRef.current && buttonsRef.current) {
//         const inputRect = inputRef.current.getBoundingClientRect();
//         const buttonsRect = buttonsRef.current.getBoundingClientRect();

//         if (inputRect.right > buttonsRect.left) {
//           setIsOverlapping(true);
//         } else {
//           setIsOverlapping(false);
//         }
//       }
//     };

//     checkOverlap();
//   }, [inputValue]);

//   return (
//     <div className="input-container">
//       <input
//         ref={inputRef}
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         className={isOverlapping ? 'input-overlapping' : 'input-normal'}
//       />
//       <div ref={buttonsRef} className="buttons">
//         <button>Button 1</button>
//         <button>Button 2</button>
//         <button>Button 3</button>
//       </div>
//     </div>
//   );
// };