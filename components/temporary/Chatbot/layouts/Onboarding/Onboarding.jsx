// ============================================================================
// Chatbot Layout - Onboarding & New Features
// ============================================================================

import React from 'react'

// Import PatternFly components
import { Button, Text, TextVariants } from '@patternfly/react-core'

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons'

// Import Chatbot components
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

// Import styles
import './Onboarding.scss'

const Onboarding = () => {

  // Configure layout options
  const page_1_GraphicSrc = ''
  const page_1_GraphicAlt = ''
  const page_1_Title = ''
  const page_1_Desc = ''

  const page_2_GraphicSrc = ''
  const page_2_GraphicAlt = ''
  const page_2_Title = ''
  const page_2_Desc = ''
  
  const page_3_GraphicSrc = ''
  const page_3_GraphicAlt = ''
  const page_3_Title = ''
  const page_3_Desc = ''

  return (
    <>
      <Header>
        <Button variant="link">Skip</Button>

        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </Header>
      <Main>
        <Text component={TextVariants.h1}>{`Redefine work in the age of AI`}</Text>
        <Text component={TextVariants.p}>{`Experience personalized assistance and seamless problem-solving, simplifying your journey with Red Hat every step of the way.`}</Text>

        <Text component={TextVariants.h1}>{`Redefine work in the age of AI`}</Text>
        <Text component={TextVariants.p}>{`Experience personalized assistance and seamless problem-solving, simplifying your journey with Red Hat every step of the way.`}</Text>

        <Text component={TextVariants.h1}>{`Redefine work in the age of AI`}</Text>
        <Text component={TextVariants.p}>{`Experience personalized assistance and seamless problem-solving, simplifying your journey with Red Hat every step of the way.`}</Text>
      </Main>
      <Footer>
        <nav className="pf-v6-c-pagination pf-v6-c-pagination--dots" aria-label="pagination">
          <ul>
            <li><Button className="" variant="tertiary" tabIndex={-1} aria-label="Go to previous page" isDisabled><FontAwesomeIcon icon={faArrowLeft} /></Button></li>
            <li><Button variant="link" aria-label="Go to 1st screen"><FontAwesomeIcon icon={faCircle} /></Button></li>
            <li><Button variant="link" aria-label="Go to 2nd screen"><FontAwesomeIcon icon={faCircle} /></Button></li>
            <li><Button variant="link" aria-label="Go to 3rd screen"><FontAwesomeIcon icon={faCircle} /></Button></li>
            <li><Button className="" tabIndex={0} aria-label="Go to next page"><FontAwesomeIcon icon={faArrowRight} /></Button></li>
          </ul>
        </nav>
      </Footer>
    </>
  )
}

export default Onboarding