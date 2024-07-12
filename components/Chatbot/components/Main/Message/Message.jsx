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

  // ---- Sample content ----
  const sampleText = <>By default <code>{'push()'}</code></>
  const sampleList = ['Item 1', 'Item 2', 'Item 3']
  const sampleListOrdered = ['Item 1', 'Item 2', 'Item 3']
  const sampleImgSrc = 'https://cdn.dribbble.com/userupload/15532609/file/original-e98aacdfdd1aad5b1a07d597e7771735.jpg?resize=2048x1536'
  const sampleImgAlt = 'Mockup of 3 iPhones on blue background'
  // ---- Sample content ----

  return (
    <div className="pf-chatbot__message">
      <Avatar src={userAvatarSrc} alt={userAvatarAlt} />
      <div className="pf-chatbot__message-contents">
        <div className="pf-chatbot__message-meta">
          <span>{userName}</span>
          <time dateTime="">{timestamp}</time>
        </div>
        <div className="pf-chatbot__message-response">
          <TextMessage text={sampleText} />
          <ListMessage items={sampleList} />
          <ListMessage ordered items={sampleListOrdered} />
          <ImageMessage imageSrc={sampleImgSrc} imageAlt={sampleImgAlt} />
        </div>
        <Sources />
      </div>
    </div>
  )
}

export default Message