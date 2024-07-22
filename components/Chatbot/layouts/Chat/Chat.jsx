// ============================================================================
// Chatbot Layout - Chat
// ============================================================================

import React, { useState, useEffect, useRef } from 'react'

// Import PatternFly components
import { Backdrop, Brand, Text, TextVariants } from '@patternfly/react-core'

// Import Chatbot components
import ToastAlerts from '../../components/ToastAlerts/ToastAlerts'
import Header from '@/components/Chatbot/components/Header/Header'
import Menu from '../../components/Menu/Menu'
import Main from '@/components/Chatbot/components/Main/Main'
import Footer from '@/components/Chatbot/components/Footer/Footer'
import Message from '@/components/Chatbot/components/Main/Message/Message'
import MessageBar from '@/components/Chatbot/components/Footer/MessageBar/MessageBar'
import Footnote from '@/components/Chatbot/components/Footer/Footnote/Footnote'
import ToggleMenu from '../../components/Header/ToggleMenu/ToggleMenu'
import ToggleOptions from '../../components/Header/ToggleOptions/ToggleOptions'
import Messages from '../../components/Main/Messages/Messages'
import Separator from '../../components/Main/Separator/Separator'
import QuickTip from '../../components/Main/QuickTip/QuickTip'

import useDarkMode from '../../useDarkMode'

// Import styles
import './Chat.scss'

const Chat = ({ config, displayMode }) => {

  // Configure data
  const { footnote } = config.chat

  // Theming hook
  const isDarkMode = useDarkMode()

  // Configure messages
  const [messages, setMessages] = useState([])
  const messagesEndRef = useRef(null)

  // Configure handlers
  const handleSend = (input) => {

    setMessages([...messages, { text: input, user: true }])

    setTimeout(() => {
      const botResponse = generateBotResponse(input);
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, user: false }])
    }, 500)

  }

  const generateBotResponse = (userInput) => {
    return `You said: ${userInput}`
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])



  const [isExpanded, setIsExpanded] = React.useState(false)
  const drawerRef = React.useRef()

  const onExpand = () => {
    drawerRef.current && drawerRef.current.focus()
  }


  return (
    <>
      <ToastAlerts />
      <Header>
        {displayMode !== 'pf-chatbot--fullscreen' && (
          <div className="pf-chatbot__title">
            <Brand src={isDarkMode ? '/logo-chatbot--inverted.svg' : '/logo-chatbot.svg'} alt="Lightspeed logo" />
            {/* <Text component={TextVariants.h1}>Red Hat</Text> */}
          </div>
        )}
        {displayMode !== 'pf-chatbot--fullscreen' && <ToggleMenu isExpanded={isExpanded} setIsExpanded={setIsExpanded} />}
        <ToggleOptions />
      </Header>
      <Menu displayMode={displayMode} isExpanded={isExpanded} setIsExpanded={setIsExpanded} drawerRef={drawerRef} onExpand={onExpand} />
      {displayMode !== 'pf-chatbot--fullscreen' && isExpanded && <Backdrop />}
      <Main>
        <Messages>

          {/* Store this conversation and pass through <Chatbot .../> */}
          <Message />
          <Separator type="text" value="Agent joined the chat" />
          <Message />
          <Separator type="date" value="2024-07-08" />
          <Message />
          <QuickTip
            imgSrc="https://cdn.dribbble.com/userupload/15166768/file/original-55c633c1ee5dbc0bb6da2b833b4d125c.png?resize=2048x1536"
            imgAlt="Picture description"
            heading="Quick tip heading"
            description="Quick tip description that can wrap multiple lines as needed." />
          <Message />
          {/* Store this conversation and pass through <Chatbot .../> */}

          {messages.map((message, index) => (
            <div key={index} className={message.user ? 'user-message' : 'bot-message'}>
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef} aria-hidden="true" />

        </Messages>
      </Main>
      <Footer>
        <MessageBar onSend={handleSend} />
        {footnote.show && <Footnote config={footnote} />}
      </Footer>
    </>
  )
}

export default Chat