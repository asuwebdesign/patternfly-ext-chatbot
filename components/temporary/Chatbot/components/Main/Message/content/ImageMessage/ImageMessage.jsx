// ============================================================================
// Chatbot Main - Message - Content - Image
// ============================================================================

import React from 'react'

// Import styles
import './ImageMessage.scss'

const ImageMessage = () => {

  const imageSrc = 'https://cdn.dribbble.com/userupload/15532609/file/original-e98aacdfdd1aad5b1a07d597e7771735.jpg?resize=2048x1536'
  const imageAlt = ''

  return (
    <div className="pf-chatbot__message-image">
      <img src={imageSrc} alt={imageAlt} />
    </div>
  )
}

export default ImageMessage