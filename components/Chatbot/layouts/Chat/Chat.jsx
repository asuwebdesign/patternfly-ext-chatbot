// ============================================================================
// Chatbot Layout - Chat
// ============================================================================

import React, { useState, useEffect, useRef } from 'react'

// Import PatternFly components
import { Backdrop } from '@patternfly/react-core'

// Import Chatbot components
import Brand from '../../components/Brand/Brand'
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

// Import styles
import './Chat.scss'

const Chat = ({ config = {}, displayMode, onModeChange }) => {

  // Configure default values
  const {

  } = config.global || {}

  const {
    footnote = {
      show: true,
      label: 'Lightspeed uses AI. Check for mistakes.',
      popover: {
        show: true,
        image: {
          show: true,
          src: 'https://cdn.dribbble.com/userupload/10651749/file/original-8a07b8e39d9e8bf002358c66fce1223e.gif',
          alt: 'Example image for footnote popover'
        },
        title: 'Verify accuracy',
        desc: `While Lightspeed strives for accuracy, there's always a possibility of errors. It's a good practice to verify critical information from reliable sources, especially if it's crucial for decision-making or actions.`,
        link: {
          show: true,
          label: 'Learn more',
          url: 'https://www.redhat.com/'
        }
      }
    }
  } = config.chat || {}

  // Configure toast alerts
  const [alerts, setAlerts] = React.useState([])

  // Add alert
  const addAlert = (title, variant, key) => {
    setAlerts(prevAlerts => [...prevAlerts, {
      title,
      variant,
      key
    }])
  }

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



  const [isMenuExpanded, setIsMenuExpanded] = React.useState(false)
  const drawerRef = React.useRef()

  const onMenuExpand = () => {
    drawerRef.current && drawerRef.current.focus()
  }

  return (
    <>
      <ToastAlerts alerts={alerts} />
      <Header>
        <div className="pf-chatbot__title">
          <Brand config={config} />
        </div>
        <ToggleMenu isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded} />
        <ToggleOptions isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded} onModeChange={onModeChange} />
      </Header>
      <Menu drawerRef={drawerRef} config={config} displayMode={displayMode} isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded} onMenuExpand={onMenuExpand} />
      {displayMode !== 'pf-chatbot--fullscreen' && isMenuExpanded && <Backdrop />}
      <Main>
        <Messages>

          {/* Store this conversation and pass through <Chatbot .../> */}
          <Message addAlert={addAlert} />
          <Separator type="text" value="Agent joined the chat" />
          <Message addAlert={addAlert} />
          <Separator type="date" value="2024-07-08" />
          <Message addAlert={addAlert} />
          <QuickTip
            imgSrc="https://cdn.dribbble.com/userupload/15166768/file/original-55c633c1ee5dbc0bb6da2b833b4d125c.png?resize=2048x1536"
            imgAlt="Picture description"
            heading="Quick tip heading"
            description="Quick tip description that can wrap multiple lines as needed." />
          <Message addAlert={addAlert} />
          {/* Store this conversation and pass through <Chatbot .../> */}

          {messages.map((message, index) => (
            <>
              <div key={index} className={message.user ? 'user-message' : 'bot-message'}>
                {message.text}
              </div>
              {/* <Message key={index} message={message.text} /> */}
            </>
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