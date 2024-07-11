// ============================================================================
// Chatbot Main - Messages
// ============================================================================

// Import styles
import './Messages.scss'

const Messages = ({ children }) => {
  return (
    <div className="pf-chatbot__messages">
      {children}
    </div>
  )
}

export default Messages