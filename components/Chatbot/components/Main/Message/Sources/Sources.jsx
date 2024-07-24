// ============================================================================
// Chatbot Main - Message - Sources
// ============================================================================

import React, { useState } from 'react'

// Import PatternFly components
import { Card, CardBody, CardFooter, Button, Content, ContentVariants } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

// Import styles
import './Sources.scss'

const Sources = ({ items }) => {

  // Configure states
  const [currentSource, setCurrentSource] = useState(0)

  // Configure props
  const { title, url, description } = items[currentSource]
  const totalSources = items.length
  const prevSourceIcon = <FontAwesomeIcon icon={faAngleLeft} />
  const nextSourceIcon = <FontAwesomeIcon icon={faAngleRight} />

  // Configure handlers
  const handleNextSource = () => {
    setCurrentSource((prevSource) => (prevSource + 1) % totalSources)
  }

  const handlePrevSource = () => {
    setCurrentSource((prevSource) => (prevSource - 1 + totalSources) % totalSources)
  }

  return (
    <div className="pf-chatbot__sources">
      <Content className="pf-chatbot__sources-total" component={ContentVariants.p}>{totalSources} sources</Content>

      <div start={currentSource + 1}>
        <Card key={currentSource}>
          <CardBody>
            <Content component={ContentVariants.h3}>
              <Content component={ContentVariants.a} href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </Content>
            </Content>
            <Content component={ContentVariants.p}>{description}</Content>
          </CardBody>
          <CardFooter>
            <div className="pf-chatbot__sources-actions">
              <Button variant="plain" onClick={handlePrevSource} isDisabled={currentSource === 0}>
                {prevSourceIcon}
              </Button>
              <Button variant="plain" onClick={handleNextSource} isDisabled={currentSource === totalSources - 1}>
                {nextSourceIcon}
              </Button>
            </div>
            <Content component={ContentVariants.p}>{currentSource + 1} of {totalSources}</Content>
          </CardFooter>
        </Card>
      </div>


    </div>
  )
}

export default Sources