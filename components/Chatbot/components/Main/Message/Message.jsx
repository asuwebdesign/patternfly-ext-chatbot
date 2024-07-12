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

  const handleMessage = () => { }

  // ---- Sample content ----
  const sampleText = <>By default <code>{'push()'}</code></>
  const sampleList = ['Item 1', 'Item 2', 'Item 3']
  const sampleListOrdered = ['Item 1', 'Item 2', 'Item 3']
  const sampleImgSrc = 'https://cdn.dribbble.com/userupload/15532609/file/original-e98aacdfdd1aad5b1a07d597e7771735.jpg?resize=2048x1536'
  const sampleImgAlt = 'Mockup of 3 iPhones on blue background'
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
        <Sources items={sampleSources} />
      </div>
    </div>
  )
}

export default Message