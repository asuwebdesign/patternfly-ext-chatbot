// ============================================================================
// Chatbot Popover
// ============================================================================

// Import PatternFly components
import { Popover as PatternflyPopover } from '@patternfly/react-core'

// Import styles
import './Popover.scss'

const Popover = ({ children, className, ...props }) => {
  return (
    <>
      <PatternflyPopover className={`pf-chatbot__popover ${className}`} {...props}>
        {children}
      </PatternflyPopover>
    </>
  )
}

export default Popover