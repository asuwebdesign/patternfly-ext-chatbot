// ============================================================================
// Chatbot Main - Messages
// ============================================================================
import React, { useState, useEffect, useRef } from 'react'

// Import Chatbot components
import JumpTop from './JumpTop/JumpTop'
import JumpBottom from './JumpBottom/JumpBottom'

// Import styles
import './Messages.scss'

const Messages = ({ children }) => {

  const [atTop, setAtTop] = useState(false)
  const [atBottom, setAtBottom] = useState(true)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const chatbotMessages = useRef(null)

  // Configure handlers
  const handleScroll = () => {
    const element = chatbotMessages.current
    if (element) {
      const { scrollTop, scrollHeight, clientHeight } = element
      setAtTop(scrollTop === 0)
      setAtBottom(scrollTop + clientHeight >= scrollHeight)
    }
  }

  const checkOverflow = () => {
    const element = chatbotMessages.current
    if (element) {
      const { scrollHeight, clientHeight } = element
      setIsOverflowing(scrollHeight >= clientHeight)
    }
  }

  const scrollToTop = () => {
    const element = chatbotMessages.current
    if (element) {
      element.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const scrollToBottom = () => {
    const element = chatbotMessages.current
    if (element) {
      element.scrollTo({ top: element.scrollHeight, behavior: 'smooth' })
    }
  }

  // Detect scroll position
  useEffect(() => {
    const element = chatbotMessages.current
    if (element) {

      // Automatically scroll to bottom on load
      element.scrollTop = element.scrollHeight

      // Listen for scroll events
      element.addEventListener('scroll', handleScroll)

      // Check initial position and overflow
      handleScroll()
      checkOverflow()

      return () => {
        element.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <>
      <JumpBottom isOverflowing={isOverflowing} atBottom={atBottom} onClick={scrollToBottom} />
      <div className="pf-chatbot__messages" ref={chatbotMessages}>
        <div className="pf-chatbot__messages-overflow">{children}</div>
      </div>
      <JumpTop isOverflowing={isOverflowing} atTop={atTop} onClick={scrollToTop} />
    </>
  )
}

export default Messages