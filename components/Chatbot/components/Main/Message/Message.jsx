// ============================================================================
// Chatbot Main - Message
// ============================================================================

import React, { useState, useEffect } from 'react'

// Import PatternFly components
import { Avatar, Label } from '@patternfly/react-core'
import { Timestamp } from '@patternfly/react-core'

// Import Chatbot components
import Processing from './Processing/Processing'
import TextMessage from './content/TextMessage/TextMessage'
import ListMessage from './content/ListMessage/ListMessage'
import ImageMessage from './content/ImageMessage/ImageMessage'
import VideoMessage from './content/VideoMessage/VideoMessage'
import QuickReplyMessage from './content/QuickReplyMessage/QuickReplyMessage'
import CodeBlockMessage from './content/CodeBlockMessage/CodeBlockMessage'
import TableMessage from './content/TableMessage/TableMessage'
import Sources from './Sources/Sources'
import Actions from './Actions/Actions'

// Import styles
import './Message.scss'

const Message = ({ config = {}, displayMode, message, addAlert }) => {

  const {
    user = {
      name: 'User Name',
      avatar: {
        src: 'https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg',
        alt: 'Profile picture of user'
      }
    },
    bot = {
      name: 'PatternFly Bot',
      avatar: {
        src: 'https://yt3.googleusercontent.com/ej8uvIe1AIFiJQXBwY9cfJmt0kO1cAeWxpBqG_cJndGHx95mFq1F8WakSoXIjtcprTbMQJoqH5M=s900-c-k-c0x00ffffff-no-rj',
        alt: 'Profile picture of bot'
      }
    }
  } = config.global || {}

  const [isProcessing, setIsProcessing] = useState(false)

  // ---- Sample content ----
  const sampleSources = [
    {
      title: 'Getting started with Red Hat OpenShift on IBM',
      url: 'https://example.com/1',
      description: 'Red Hat OpenShift on IBM Cloud is a managed offering to create your own cluster of compute hosts where you can deploy and manage containerized apps on IBM Cloud',
    },
    {
      title: 'Item 2',
      url: 'https://example.com/2',
      description: 'This is the description for item 2.',
    },
    {
      title: 'Item 3',
      url: 'https://example.com/3',
      description: 'This is the description for item 3.',
    }
  ]
  const sampleQuickReplyInlineMinimum = ['Yes', 'No']
  const sampleQuickReplyInline = ['Microsoft Edge', 'Google Chrome', 'Mozilla Firefox', 'Apple Safari', 'Internet Explorer']
  const sampleQuickReplyStacked = ['Help me with an access issue', 'Show my critical vulnerabilities', 'Create new integrations', 'Get recommendations from an advisor', 'Something else']
  // ---- Sample content ----

  // Simulate bot processing message (will need to change later)
  useEffect(() => {
    if (message.role === 'bot') {
      setIsProcessing(true)

      const timer = setTimeout(() => {
        setIsProcessing(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [message.role])

  return (
    <div className={`pf-chatbot__message ${message.role ? 'pf-chatbot__message--' + message.role : ''}`}>
      <Avatar src={message.role === 'user' ? user.avatar.src : bot.avatar.src} alt={message.role === 'user' ? user.avatar.alt : bot.avatar.alt} />
      <div className="pf-chatbot__message-contents">
        <div className="pf-chatbot__message-meta">
          <span className="pf-chatbot__message-name">{message.role === 'user' ? user.name : bot.name}</span>
          {message.role === 'bot' && <Label variant="outline" isCompact>AI</Label>}
          <time dateTime="">{message.time}</time>
        </div>
        <div className="pf-chatbot__message-response">
          {isProcessing && <Processing />}
          {!isProcessing && <>
            {message.content.map((snippet, index) => (
              <>
                {snippet.type === 'text' && <TextMessage key={index} text={snippet.text} />}
                {snippet.type === 'list' && <ListMessage items={snippet.items} ordered={snippet.ordered} />}
                {snippet.type === 'image' && <ImageMessage image={snippet.image} />}
                {snippet.type === 'video' && <VideoMessage video={snippet.video} />}
                {snippet.type === 'quick-reply' && <QuickReplyMessage items={snippet.items} stacked={snippet.stacked} />}
                {snippet.type === 'codeblock' && <CodeBlockMessage language={snippet.language} code={snippet.code} addAlert={addAlert} />}
                {snippet.type === 'table' && <TableMessage table={snippet.table} displayMode={displayMode} />}
              </>
            ))}
          </>}
        </div>
        {/* {!isProcessing && <Sources items={sampleSources} />} */}
        {!isProcessing && message.role === 'bot' && <Actions addAlert={addAlert} />}
      </div>
    </div>
  )
}

export default Message