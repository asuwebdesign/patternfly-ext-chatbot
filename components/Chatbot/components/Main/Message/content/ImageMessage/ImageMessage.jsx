// ============================================================================
// Chatbot Main - Message - Content - Image
// ============================================================================
import React from 'react'

// Import styles
import './ImageMessage.scss'

const ImageMessage = ({ image }) => {
  return (
    <div className="pf-chatbot__message-image">
      {image.src && image.alt && <img src={image.src} alt={image.alt} />}
    </div>
  )
}

export default ImageMessage