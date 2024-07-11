// ============================================================================
// Chatbot Tooltip
// ============================================================================

// Import PatternFly components
import { Tooltip as PatternflyTootip } from '@patternfly/react-core'

// Import styles
import './Tooltip.scss'

const Tooltip = (props) => {
  return (
    <>
      <PatternflyTootip className="pf-chatbot__tooltip" entryDelay={0} exitDelay={0} distance={8} animationDuration={0} {...props} />
    </>
  )
}

export default Tooltip