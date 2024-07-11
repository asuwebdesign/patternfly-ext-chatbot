// ============================================================================
// Chatbot Footer
// ============================================================================

// Global footer component
// Supports:
// - Message bar
// - Footnote
// - Footnote popover

// Import styles
import './Footer.scss'

const Footer = ({ children }) => {
  return (
    <div className="pf-chatbot__footer">
      {children}
    </div>
  )
}

export default Footer