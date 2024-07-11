// ============================================================================
// Chatbot Header
// ============================================================================

// Global header component
// Supports:
// - Brand name/logo
// - Menu
// - Options

// Import styles
import './Header.scss'

const Header = ({ children }) => {
  return (
    <div className="pf-chatbot__header">
      {children}
    </div>
  )
}

export default Header