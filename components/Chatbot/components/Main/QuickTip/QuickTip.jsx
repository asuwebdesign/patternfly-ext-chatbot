// ============================================================================
// Chatbot Main - Quick Tip
// ============================================================================

import React, { useState } from 'react'

// Import PatternFly components
import { Button, Card, CardBody, CardFooter, Content, ContentVariants } from '@patternfly/react-core'

// Import styles
import './QuickTip.scss'

const QuickTip = ({ imgSrc, imgAlt, heading, description }) => {

  // Configure visibility
  const [isVisible, setIsVisible] = useState(true)

  // Configure handlers
  const handleDismiss = () => {
    setIsVisible(false)
  }

  // Configure content
  const quickTipImage = imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} />
  const quickTipHeading = heading && <Content component={ContentVariants.h3}>{heading}</Content>
  const quickTipDesc = description && <Content component={ContentVariants.p}>{description}</Content>

  return (
    <Card className={`pf-chatbot__quick-tip ${!isVisible ? 'pf-chatbot__quick-tip--hidden' : ''}`}>
      <CardBody>
        {quickTipImage}
        {quickTipHeading}
        {quickTipDesc}
      </CardBody>
      <CardFooter>
        <Button variant="secondary" onClick={handleDismiss}>Got it</Button>
      </CardFooter>
    </Card>
  )
}

export default QuickTip