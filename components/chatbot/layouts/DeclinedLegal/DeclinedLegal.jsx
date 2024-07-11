// ============================================================================
// Chatbot Layout - Declined Legal
// ============================================================================

import React from 'react'

// Import PatternFly components
import { Button, Text, TextVariants } from '@patternfly/react-core'

// Import Chatbot components
import Header from '@/components/Chatbot/components/Header/Header'
import Main from '@/components/Chatbot/components/Main/Main'
import Footer from '@/components/Chatbot/components/Footer/Footer'
import Illustration from './Illustration'

// Import styles
import './DeclinedLegal.scss'

const DeclinedLegal = ({ declinedLegalTitle, declinedLegalContent }) => {

  const title = declinedLegalTitle ? declinedLegalTitle : 'Acceptance required'
  const content = declinedLegalContent ? declinedLegalContent : <>
    <Text component={TextVariants.p}>{`We're sorry, but to use our app, you need to accept our Terms of Use and Privacy Statement. We understand that these agreements are important to you. These agreements are essential for providing you with our services and ensuring your data is protected.`}</Text>
    <Text component={TextVariants.p}>{`Please take a moment to review them again. You can also learn more about our agreements or contact customer support if you have any questions.`}</Text>
  </>

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
        <Button>Review agreements</Button>
        <Button variant="tertiary">Learn more</Button>
        <Button variant="tertiary">Contact customer support</Button>
      </Footer>
    </>
  )
}

export default DeclinedLegal