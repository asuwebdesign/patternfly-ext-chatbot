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

const VideoMessage = ({ video }) => {
  return (
    <div className="pf-chatbot__message-video">
      <MediaPlayer title={video.title} src={video.src}>
        <MediaProvider>
          {video.poster.src && video.poster.alt && (
            <Poster
              className="vds-poster"
              src={video.poster.src}
              alt={video.poster.alt}
            />
          )}
        </MediaProvider>
        <DefaultVideoLayout thumbnails={video.thumbnails} icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  )
}

export default VideoMessage