// ============================================================================
// Chatbot Gutter
// ============================================================================
import React, { useRef } from 'react'

// Import styles
import './Gutter.scss'

const Gutter = ({ chatbotVisible, updateWidth }) => {

  // handle click => toggle visibility
  // handle drag  => resize width + html margin
  const chatbotGutterRef = useRef(null)

  const handleDrag = (event) => {
    if (event.clientX > 0) {
      updateWidth(event.clientX)
    }
  };

  return (
    <div
      ref={chatbotGutterRef}
      className="pf-chatbot__gutter"
      onClick={chatbotVisible}
      onDrag={handleDrag}
      draggable
    >
      
    </div>
  )
}

export default Gutter