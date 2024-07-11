// ============================================================================
// Chatbot Main - Quick Tip
// ============================================================================

import React from 'react'

// Import PatternFly components
import { Button, Card, CardBody, CardFooter } from '@patternfly/react-core'

// Import styles
import './QuickTip.scss'

const QuickTip = () => {
  return (
    <Card className="pf-chatbot__quick-tip">
      <CardBody>
        Image
        Heading
        Description
      </CardBody>
      <CardFooter>
        <Button variant="secondary">Got it</Button>
      </CardFooter>
    </Card>
  )
}

export default QuickTip