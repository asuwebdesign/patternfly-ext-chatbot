// ============================================================================
// Chatbot Footer - Message Bar
// ============================================================================
import React, { useRef, useState, useEffect } from 'react'
import { AutoTextArea } from 'react-textarea-auto-witdth-height'

// Import Chatbot components
import Attach from './Attach/Attach'
import Microphone from './Microphone/Microphone'
import Send from './Send/Send'
import Stop from './Stop/Stop'

// Import styles
import './MessageBar.scss'

const MessageBar = ({ onSend }) => {

  // Text Input
  // --------------------------------------------------------------------------
  const [value, setValue] = React.useState('')
  const textareaRef = useRef(null)

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  // Attachments
  // --------------------------------------------------------------------------
  const handleAttach = () => { console.log('Attach button clicked') }

  // Microphone
  // --------------------------------------------------------------------------
  const [listening, setListening] = useState(false)
  const [speechRecognition, setSpeechRecognition] = useState(null)

  // Listen for speech
  const startListening = () => {
    if (speechRecognition) {
      speechRecognition.start()
      setListening(true)
    }
  };

  // Stop listening for speech
  const stopListening = () => {
    if (speechRecognition && listening) {
      speechRecognition.stop()
      setListening(false)
    }
  }

  // Detect speech recognition browser support
  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {

      // Initialize SpeechRecognition
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = 'en-US'

      recognition.onresult = (event) => {
        const result = event.results[0][0].transcript
        setValue(result)
        recognition.stop()
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error)
        recognition.stop()
      };

      setSpeechRecognition(recognition)
    }
  }, [])

  // Handle sending message
  const handleSend = () => {
    onSend(value)
    setValue('')
  }

  // Handle stop message response  
  const handleStop = () => { console.log('Stop button clicked') }

  return (
    <div className="pf-chatbot__message-bar" >

      <div className="pf-chatbot__message-bar-input">
        <AutoTextArea
          ref={textareaRef}
          className="pf-chatbot__message-textarea"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={listening ? 'Listening' : 'Send a message...'}
          aria-label={listening ? 'Listening' : 'Send a message...'} />
      </div>

      <div className="pf-chatbot__message-bar-actions">
        <Attach handleAttach={handleAttach} isDisabled={listening} />
        {speechRecognition && <Microphone listening={listening} startListening={startListening} stopListening={stopListening} />}
        {/* <Stop handleStop={handleStop} /> */}
        {value && <Send value={value} handleSend={handleSend} />}
      </div>
    </div>
  )
}

export default MessageBar