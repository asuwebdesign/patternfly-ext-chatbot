// ============================================================================
// Chatbot Main - Message - Sources
// ============================================================================

import React from 'react'

// Import PatternFly components
import { Card, CardBody, CardFooter, Button } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

// Import styles
import './Sources.scss'

const Sources = () => {

  // Total # of sources
  // - Source title
  // - Source url
  // - Source description
  // Current source (ID)

  const prevSourceIcon = <FontAwesomeIcon icon={faAngleLeft} />
  const nextSourceIcon = <FontAwesomeIcon icon={faAngleRight} />

  return (
    <div className="pf-chatbot__message-sources">
      <div>3 sources</div>
      
      <Card>
        <CardBody>
          <h3><a href="#">Title</a></h3>
          <div>Description</div>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
      
      <Button variant="plain">
        {prevSourceIcon}
      </Button>
      <Button variant="plain">
        {nextSourceIcon}
      </Button>
      <div>1 of 3</div>
    </div>
  )
}

export default Sources