// ============================================================================
// Chatbot Main - Message
// ============================================================================

import React, { useState } from 'react'

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
import Sources from './Sources/Sources'

// Import styles
import './Message.scss'

const Message = () => {

  // avatar, name, badge, timestamp, message, sources, actions

  const userAvatarSrc = 'https://cdn.dribbble.com/userupload/13172077/file/original-a14393b3cb1514a52294d1f921261f51.jpg?resize=1504x1504'
  const userAvatarAlt = 'Profile picture of someone'
  const userName = 'User Name'
  const timestamp = '9:30am'

  const [isProcessing, setIsProcessing] = useState(false)

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
  const sampleVideoTitle = 'Sprite Fight'
  const sampleVideoSrc = 'https://files.vidstack.io/sprite-fight/720p.mp4'
  const sampleVideoPosterSrc = 'https://files.vidstack.io/sprite-fight/poster.webp'
  const sampleVideoPosterAlt = 'Girl walks into campfire with gnomes surrounding her friend ready for their next meal!'
  const sampleVideoThumbnails = 'https://files.vidstack.io/sprite-fight/thumbnails.vtt'
  const sampleQuickReplyInlineMinimum = ['Yes', 'No']
  const sampleQuickReplyInline = ['Microsoft Edge', 'Google Chrome', 'Mozilla Firefox', 'Apple Safari', 'Internet Explorer']
  const sampleQuickReplyStacked = ['Help me with an access issue', 'Show my critical vulnerabilities', 'Create new integrations', 'Get recommendations from an advisor', 'Something else']

  // ---- Sample content ----

  return (
    <div className="pf-chatbot__message">
      <Avatar src={userAvatarSrc} alt={userAvatarAlt} />
      <div className="pf-chatbot__message-contents">
        <div className="pf-chatbot__message-meta">
          <span className="pf-chatbot__message-name">{userName}</span>
          <Label variant="outline" isCompact>AI</Label> {/* only applies to bot messages... */}
          <time dateTime="">{timestamp}</time>
        </div>
        <div className="pf-chatbot__message-response">
          {isProcessing && <Processing />}
          {!isProcessing && <>
            <TextMessage text={sampleText} />
            <ListMessage items={sampleList} />
            <ListMessage ordered items={sampleListOrdered} />
            <ImageMessage imageSrc={sampleImgSrc} imageAlt={sampleImgAlt} />
            <VideoMessage title={sampleVideoTitle} videoSrc={sampleVideoSrc} posterSrc={sampleVideoPosterSrc} posterAlt={sampleVideoPosterAlt} thumbnails={sampleVideoThumbnails} />
            <QuickReplyMessage items={sampleQuickReplyInlineMinimum} />
            <QuickReplyMessage items={sampleQuickReplyInline} />
            <QuickReplyMessage items={sampleQuickReplyStacked} stacked />
          </>}
        </div>
        {/* {!isProcessing && <QuickReply />} */}
        {!isProcessing && <Sources items={sampleSources} />}
      </div>
    </div>
  )
}

export default Message