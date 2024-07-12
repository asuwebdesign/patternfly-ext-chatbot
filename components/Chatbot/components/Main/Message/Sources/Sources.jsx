// ============================================================================
// Chatbot Main - Message - Sources
// ============================================================================

import React, { useState } from 'react'

// Import PatternFly components
import { Card, CardBody, CardFooter, Button, Text, TextVariants } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

// Import styles
import './Sources.scss'

const Sources = ({ items }) => {

  // Total # of sources
  // - Source title
  // - Source url
  // - Source description
  // Current source (ID)

  const prevSourceIcon = <FontAwesomeIcon icon={faAngleLeft} />
  const nextSourceIcon = <FontAwesomeIcon icon={faAngleRight} />

  const [currentSource, setCurrentSource] = useState(0)
  const totalSources = items.length

  const handleNextSource = () => {
    setCurrentSource((prevSource) => (prevSource + 1) % totalSources)
  }

  const handlePrevSource = () => {
    setCurrentSource((prevSource) => (prevSource - 1 + totalSources) % totalSources)
  }

  const { title, url, description } = items[currentSource]

  return (
    <div className="pf-chatbot__sources">
      <Text component={TextVariants.p}>{totalSources} sources</Text>

      <div start={currentSource + 1}>
        <Card key={currentSource}>
          <CardBody>
            <Text component={TextVariants.h3}>
              <Text component={TextVariants.a} href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </Text>
            </Text>
            <Text component={TextVariants.p}>{description}</Text>
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
            <Text component={TextVariants.p}>{currentSource + 1} of {totalSources}</Text>
          </CardFooter>
        </Card>
      </div>


    </div>
  )
}

export default Sources