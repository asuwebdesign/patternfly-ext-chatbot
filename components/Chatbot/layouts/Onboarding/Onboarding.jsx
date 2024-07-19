// ============================================================================
// Chatbot Layout - Onboarding & New Features
// ============================================================================
import React, { useState } from 'react'

// Import PatternFly components
import { Button, Text, TextVariants } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons'

// Import Chatbot components
import Tooltip from '@/components/Chatbot/components/Tooltip/Tooltip'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

// Import styles
import './Onboarding.scss'

const Onboarding = ({ config, onSkip }) => {

  // Configure data
  const { features } = config.onboarding

  const [currentFeature, setCurrentFeature] = useState(0)

  // Configure tooltips
  const tooltipPrevious = React.useRef()
  const tooltipNext = React.useRef()

  // Configure handlers
  const handlePrevious = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length)
  }

  const handleNext = () => {
    if (currentFeature === features.length - 1) {
      onSkip()
    } else {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }
  }

  return (
    <>
      <Header>
        <Text component={TextVariants.h1}>{`What's new`}</Text>
        <Button variant="link" onClick={onSkip}>Skip</Button>
      </Header>
      <Main>
        <img src={features[currentFeature].photo} alt={features[currentFeature].title} />
        <Text id="chatbot-feature-title" component={TextVariants.h2}>{features[currentFeature].title}</Text>
        <Text id="chatbot-feature-desc" component={TextVariants.p}>{features[currentFeature].description}</Text>
      </Main>
      <Footer>
        <div className="controls">
          <Button
            ref={tooltipPrevious}
            variant="tertiary"
            onClick={handlePrevious}
            isDisabled={currentFeature === 0}
            aria-describedby="pf-chatbot__tooltip--onboarding-previous"
            aria-controls="chatbot-feature-title chatbot-feature-desc"
          ><FontAwesomeIcon icon={faArrowLeft} /></Button>
          <Tooltip
            id="pf-chatbot__tooltip--onboarding-previous"
            content="Go back"
            position="top"
            triggerRef={tooltipPrevious} />

          <div className="pagination">
            {features.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentFeature ? 'active' : ''}`}
                aria-label={`Feature ${index + 1}`}
                aria-current={index === currentFeature ? 'page' : undefined}
              ></span>
            ))}
          </div>

          <Button
            ref={tooltipNext}
            onClick={handleNext}
            aria-describedby="pf-chatbot__tooltip--onboarding-next"
            aria-controls="chatbot-feature-title chatbot-feature-desc"
          ><FontAwesomeIcon icon={currentFeature === features.length - 1 ? faCheck : faArrowRight} /></Button>
          <Tooltip
            id="pf-chatbot__tooltip--onboarding-next"
            content={currentFeature === features.length - 1 ? 'Dismiss' : 'Continue'}
            position="top"
            triggerRef={tooltipNext} />
        </div>
      </Footer>
    </>
  )
}

export default Onboarding