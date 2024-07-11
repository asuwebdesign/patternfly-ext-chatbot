// ============================================================================
// Chatbot Main - Message
// ============================================================================

import React from 'react'

// Import PatternFly components
import { Avatar } from '@patternfly/react-core'
import { Timestamp } from '@patternfly/react-core'

// Import Chatbot components
import TextMessage from './content/TextMessage/TextMessage'
import ListMessage from './content/ListMessage/ListMessage'
import ImageMessage from './content/ImageMessage/ImageMessage'
import Sources from './Sources/Sources'

// Import styles
import './Message.scss'

const Message = () => {

  // avatar, name, badge, timestamp, message, sources, actions

  const userAvatarSrc = 'https://cdn.dribbble.com/userupload/13172077/file/original-a14393b3cb1514a52294d1f921261f51.jpg?resize=1504x1504'
  const userAvatarAlt = ''
  const userName = 'User Name'
  const timestamp = '9:30am'

  const handleMessage = () => {}

  return (
    <div className="pf-chatbot__message">
      <Avatar src={userAvatarSrc} alt={userAvatarAlt} />
      <div className="pf-chatbot__message-contents">
        <div className="pf-chatbot__message-meta">
          <span>{userName}</span>
          <time dateTime="">{timestamp}</time>
        </div>
        <div className="pf-chatbot__message-response">
          <TextMessage />
          <ListMessage />
          <ImageMessage />
        </div>
        <Sources />
      </div>
    </div>
  )
}

export default Message