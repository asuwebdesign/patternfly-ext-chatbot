// ============================================================================
// Chatbot Toast Alerts
// ============================================================================
import React, { useState } from 'react'

// Import PatternFly components
import { AlertGroup, Alert, AlertVariant, AlertActionCloseButton } from '@patternfly/react-core'

// Import styles
import './ToastAlerts.scss'

const ToastAlerts = ({ alerts }) => {

  const timeout = 3000

  return (
    <AlertGroup className="pf-chatbot__toast-alerts" isLiveRegion>

      {alerts.map(({key, variant, title}) => (
        <Alert
          variant={AlertVariant[variant]}
          title={title}
          key={key}
          timeout={timeout}
        />
      ))}
    
    </AlertGroup>
  )
}

export default ToastAlerts