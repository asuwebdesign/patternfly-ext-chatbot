// ============================================================================
// Chatbot Main - Message - Content - Image
// ============================================================================
import React from 'react'

// Import styles
import './ImageMessage.scss'

const ImageMessage = ({ imageSrc, imageAlt }) => {
  return (
    <div className="pf-chatbot__message-image">
      {imageSrc && imageAlt && <img src={imageSrc} alt={imageAlt} />}
    </div>
  )
}

export default ImageMessage