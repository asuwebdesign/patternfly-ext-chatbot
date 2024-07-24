// ============================================================================
// Chatbot Layout - Onboarding & New Features
// ============================================================================
import React, { useState } from 'react'

// Import PatternFly components
import { Button, Content, ContentVariants } from '@patternfly/react-core'

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

const Onboarding = ({ config = {}, onSkip }) => {

  // Configure default values
  const {
    features = [
      {
        photo: 'https://cdn.dribbble.com/userupload/15673045/file/original-463ff248823b210040f9a6f19fb4b017.png?resize=1504x1128',
        title: 'Feature 1',
        description: 'Description of Feature 1.',
      },
      {
        photo: 'https://cdn.dribbble.com/userupload/15672299/file/original-dd87de7b073f07b6794fd083eaff9e7a.png?resize=1504x1128',
        title: 'Feature 2',
        description: 'Description of Feature 2.',
      },
      {
        photo: 'https://cdn.dribbble.com/userupload/15666808/file/original-a9ec72266c73d50998f078963fd1d5c5.png?resize=2048x1537',
        title: 'Feature 3',
        description: 'Description of Feature 3.',
      },
    ]
  } = config.onboarding || {}

  const [currentFeature, setCurrentFeature] = useState(0)

  // Configure tooltips
  const tooltipPrevious = React.useRef()
  const tooltipNext = React.useRef()

  // Display previous feature
  const handlePrevious = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length)
  }

  // Display next feature
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
        <Content component={ContentVariants.h1}>{`What's new`}</Content>
        <Button variant="link" onClick={onSkip}>Skip</Button>
      </Header>
      <Main>
        <img src={features[currentFeature].photo} alt={features[currentFeature].title} />
        <Content id="chatbot-feature-title" component={ContentVariants.h2}>{features[currentFeature].title}</Content>
        <Content id="chatbot-feature-desc" component={ContentVariants.p}>{features[currentFeature].description}</Content>
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