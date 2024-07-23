// ============================================================================
// Chatbot Layout - Terms of Use
// ============================================================================
import React from 'react'

// Import PatternFly components
import { Button, Text, TextVariants } from '@patternfly/react-core'

// Import Chatbot components
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import Illustration from './Illustration'

// Import styles
import './TermsOfUse.scss'

const TermsOfUse = ({ config = {} }) => {

  // Configure default values
  const {
    title = 'Terms of use',
    content = 'No agreement has been configured.'
  } = config.termsOfUse || {}

  return (
    <>
      <Header>
        <div className="pf-chatbot__illustration">
          <Illustration />
        </div>
        <Text component={TextVariants.h1}>{title}</Text>
      </Header>
      <Main>{content}</Main>
      <Footer>
        <Button variant="tertiary">Decline</Button>
        <Button>Accept</Button>
      </Footer>
    </>
  )
}

export default TermsOfUse