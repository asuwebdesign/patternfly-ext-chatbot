// ============================================================================
// Chatbot Main - Quick Tip
// ============================================================================

import React, { useState } from 'react'

// Import PatternFly components
import { Button, Card, CardBody, CardFooter, Text, TextVariants } from '@patternfly/react-core'

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
  const quickTipHeading = heading && <Text component={TextVariants.h3}>{heading}</Text>
  const quickTipDesc = description && <Text component={TextVariants.p}>{description}</Text>

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