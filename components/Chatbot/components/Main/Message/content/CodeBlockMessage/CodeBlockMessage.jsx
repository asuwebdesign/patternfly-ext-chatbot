// ============================================================================
// Chatbot Main - Message - Content - Code Block
// ============================================================================
import React, { useEffect, useId, useRef, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { obsidian } from 'react-syntax-highlighter/dist/esm/styles/hljs'

// Import PatternFly components
import { CodeBlock, CodeBlockAction, CodeBlockCode, Button } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'

// Import Chatbot components
import Tooltip from '@/components/Chatbot/components/Tooltip/Tooltip'

// Import styles
import './CodeBlockMessage.scss'

const CodeBlockMessage = ({ language, code, addAlert }) => {

  const [copied, setCopied] = React.useState(false)

  const buttonRef = useRef()
  const tooltipID = useId()

  const getUniqueId = () => new Date().getTime()

  // Configure tooltip
  const tooltipUseMicrophoneRef = React.useRef()

  // Copy code block contents to clipboard
  const clipboardCopyFunc = (event, text) => {
    navigator.clipboard.writeText(text.toString())
  }

  // Handle clicking copy button
  const handleCopy = (event, text) => {
    clipboardCopyFunc(event, text)
    setCopied(true)
    addAlert('Copied to clipboard', 'success', getUniqueId())
  }

  // Reset copied state
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  })

  // Setup code block header
  const actions = <>
    <CodeBlockAction>
      <div className="pf-chatbot__message-code-block-language">{language}</div>
      
      <Button
        ref={buttonRef}
        variant="plain"
        className="pf-chatbot__button--copy"
        aria-describedby={tooltipID}
        onClick={(event) => handleCopy(event, code)}
      >
        <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
      </Button>
      <Tooltip id={tooltipID} content="Copy" position="top" triggerRef={buttonRef} />
    </CodeBlockAction>
  </>

  return (
    <div className="pf-chatbot__message-code-block">
      <CodeBlock actions={actions}>
        <CodeBlockCode>
          <SyntaxHighlighter language={language} style={obsidian} PreTag="div" CodeTag="div" wrapLongLines>
            {code}
          </SyntaxHighlighter>
        </CodeBlockCode>
      </CodeBlock>
    </div>
  )
}

export default CodeBlockMessage