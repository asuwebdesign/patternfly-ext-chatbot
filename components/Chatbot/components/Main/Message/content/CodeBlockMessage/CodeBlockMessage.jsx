// ============================================================================
// Chatbot Main - Message - Content - Code Block
// ============================================================================
import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

// Import PatternFly components
import { CodeBlock, CodeBlockAction, CodeBlockCode, ClipboardCopyButton, Button } from '@patternfly/react-core'

// Import styles
import './CodeBlockMessage.scss'

const CodeBlockMessage = () => {

  const [copied, setCopied] = React.useState(false)

  const clipboardCopyFunc = (event, text) => {
    navigator.clipboard.writeText(text.toString())
  }

  const onClick = (event, text) => {
    clipboardCopyFunc(event, text)
    setCopied(true)
  }

  const actions = <>
    <CodeBlockAction>
      <div>YAML</div>
      <ClipboardCopyButton id="basic-copy-button" textId="code-content" aria-label="Copy to clipboard" onClick={e => onClick(e, code)} exitDelay={copied ? 1500 : 600} maxWidth="110px" variant="plain" onTooltipHidden={() => setCopied(false)}>
        {copied ? 'Successfully copied to clipboard!' : 'Copy to clipboard'}
      </ClipboardCopyButton>
    </CodeBlockAction>
  </>

  const code = `apiVersion: helm.openshift.io/v1beta1/
kind: HelmChartRepository
metadata:
name: azure-sample-repo0oooo00ooo
spec:
connectionConfig:
url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs/Azure-Samples/helm-charts/master/docs`

  return (
    <div className="pf-chatbot__message-code-block">
      <CodeBlock actions={actions}>
        {/* <SyntaxHighlighter language="yaml" style={atomOneDark} wrapLongLines>{code}</SyntaxHighlighter>         */}
        {/* <CodeBlockCode>{code}</CodeBlockCode> */}
        <CodeBlockCode><SyntaxHighlighter language="yaml" style={atomOneDark} wrapLongLines PreTag="div" CodeTag="div">{code}</SyntaxHighlighter></CodeBlockCode>
      </CodeBlock>
    </div>
  )
}

export default CodeBlockMessage