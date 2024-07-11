// ============================================================================
// Chatbot Popover
// ============================================================================

// Import PatternFly components
import { Popover as PatternflyPopover } from '@patternfly/react-core'

// Import styles
import './Popover.scss'

const Popover = ({ children, ...props }) => {
  return (
    <>
      <PatternflyPopover className="pf-chatbot__popover" {...props}>
        {children}
      </PatternflyPopover>
    </>
  )
}

export default Popover