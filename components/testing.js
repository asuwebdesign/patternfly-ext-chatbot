import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@patternfly/react-core'

export default function Testing({ handleDisplay }) {

  const testingStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '24px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    gap: '8px',
    zIndex: '999'
  }

  // Switch Theme
  const [isDarkTheme, setIsDarkTheme] = useState(false)  
  

  useEffect(() => {
    const htmlElement = document.documentElement
    if (isDarkTheme) {
      htmlElement.classList.add('pf-v6-theme-dark')
    } else {
      htmlElement.classList.remove('pf-v6-theme-dark')
    }
  }, [isDarkTheme]);
  
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  

  return (
    <div className="testing" style={testingStyle}>
      <p><small>Themes:</small></p>
      <Button variant="tertiary" onClick={toggleTheme}>Toggle theme</Button>
      <br />
      <p><small>Display modes:</small></p>
      <Button variant="tertiary" onClick={() => handleDisplay()}>Floating</Button>
      <Button variant="tertiary" onClick={() => handleDisplay('pf-chatbot--docked')}>Docked</Button>
      <Button variant="tertiary" onClick={() => handleDisplay('pf-chatbot--fullscreen')}>Fullscreen</Button>
      <br />
      <p><small>Screens:</small></p>
      <Link href="/">Default</Link>
      <Link href="/splash">Splash</Link>
      <Link href="/terms">Terms of use</Link>
      <Link href="/privacy">Privacy</Link>
      <Link href="/declined-legal">Declined legal</Link>
      <Link href="/onboarding">Onboarding / new features</Link>
      <Link href="/chat">Chat</Link>
    </div>
  )
}