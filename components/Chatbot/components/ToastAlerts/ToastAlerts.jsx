// ============================================================================
// Chatbot Toast Alerts
// ============================================================================
import React, { useState } from 'react'

// Import PatternFly components
import { AlertGroup, Alert, AlertActionCloseButton } from '@patternfly/react-core'

// Import styles
import './ToastAlerts.scss'

const ToastAlerts = () => {

  const [alerts, setAlerts] = React.useState([])
  const timeout = 5000

  return (
    <AlertGroup className="pf-chatbot__toast-alerts" isLiveRegion>
      <Alert
        // variant="success"
        title="Alert title"
        // actionClose={<AlertActionCloseButton title="Alert close button" variantLabel="Close button label" />}
        timeout={timeout} />
    </AlertGroup>
  )
}

export default ToastAlerts