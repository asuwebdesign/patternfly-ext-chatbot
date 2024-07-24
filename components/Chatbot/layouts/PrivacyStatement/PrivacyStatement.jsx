// ============================================================================
// Chatbot Layout - Privacy Statement
// ============================================================================
import React from 'react'

// Import PatternFly components
import { Button, Content, ContentVariants } from '@patternfly/react-core'

// Import Chatbot components
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import Illustration from './Illustration'

// Import styles
import './PrivacyStatement.scss'

const PrivacyStatement = ({ config = {} }) => {

  // Configure default values
  const {
    title = 'Privacy statement',
    content = 'No agreement has been configured.'
  } = config.privacyStatement || {}

  return (
    <>
      <Header>
        <div className="pf-chatbot__illustration">
          <Illustration />
        </div>
        <Content component={ContentVariants.h1}>{title}</Content>
      </Header>
      <Main>{content}</Main>
      <Footer>
        <Button variant="tertiary">Decline</Button>
        <Button>Accept</Button>
      </Footer>
    </>
  )
}

export default PrivacyStatement