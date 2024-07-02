import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Testing() {

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
    <div className="testing">
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link href="/">Splash</Link>
      <Link href="/terms">Terms of use</Link>
      <Link href="/privacy">Privacy</Link>
      <Link href="/declined-legal">Declined legal</Link>
      <Link href="/onboarding">Onboarding / new features</Link>
      <Link href="/chat">Chat</Link>
    </div>
  )
}