// ============================================================================
// Chatbot Main - Message - Content - Video
// ============================================================================
import React from 'react'

// Import VidStack components
import { Poster, MediaPlayer, MediaProvider } from '@vidstack/react'
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default'

// Import VidStack styles
import '@vidstack/react/player/styles/default/theme.css'
import '@vidstack/react/player/styles/default/layouts/video.css'

// Import styles
import './VideoMessage.scss'

const VideoMessage = ({ title, videoSrc, posterSrc, posterAlt, thumbnails }) => {
  return (
    <div className="pf-chatbot__message-video">
      <MediaPlayer title={title} src={videoSrc}>
        <MediaProvider>
          {posterSrc && posterAlt && (
            <Poster
              className="vds-poster"
              src={posterSrc}
              alt={posterAlt}
            />
          )}
        </MediaProvider>
        <DefaultVideoLayout thumbnails={thumbnails} icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  )
}

export default VideoMessage