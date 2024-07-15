// ============================================================================
// Chatbot Main
// ============================================================================
import React from 'react'

// Import styles
import './Main.scss'

const Main = ({ children }) => {
  return (
    <div className="pf-chatbot__main">
      {children}
    </div>
  )
}

export default Main