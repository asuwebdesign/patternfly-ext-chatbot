// ============================================================================
// Chatbot Main - Message - Content - Code Block
// ============================================================================
import React, { useEffect, useId, useRef, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { obsidian } from 'react-syntax-highlighter/dist/esm/styles/hljs'

// Import PatternFly components
import { CodeBlock, CodeBlockAction, CodeBlockCode, ClipboardCopyButton, Button } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'

// Import Chatbot components
import Tooltip from '@/components/Chatbot/components/Tooltip/Tooltip'

// Import styles
import './CodeBlockMessage.scss'

const CodeBlockMessage = ({ addAlert }) => {

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
      <div className="pf-chatbot__message-code-block-language">YAML</div>
      
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

  const code = `application:
  name: FakeApp
  version: 1.0.0
  environment: production

database:
  host: db.fakeapp.com
  port: 5432
  name: fakeapp_db
  user: fakeuser
  password: fakepassword

server:
  host: api.fakeapp.com
  port: 8080

logging:
  level: INFO
  format: "%(asctime)s - %(name)s - %(levelname)s - %(message)s"

auth:
  jwt_secret: supersecretjwtkey
  token_expiration_minutes: 60

features:
  enable_feature_x: true
  enable_feature_y: false
  enable_feature_z: true`

  return (
    <div className="pf-chatbot__message-code-block">
      <CodeBlock actions={actions}>
        <CodeBlockCode>
          <SyntaxHighlighter language="yaml" style={obsidian} PreTag="div" CodeTag="div" wrapLongLines>
            {code}
          </SyntaxHighlighter>
        </CodeBlockCode>
      </CodeBlock>
    </div>
  )
}

export default CodeBlockMessage