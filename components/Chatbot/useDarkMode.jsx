// ============================================================================
// Chatbot Utility - Use Dark Mode
// ============================================================================
import { useEffect, useState } from 'react'

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const checkDarkMode = () => {
      const htmlElement = document.documentElement
      setIsDarkMode(htmlElement.classList.contains('pf-v6-theme-dark'))
    }

    // Check the initial state
    checkDarkMode()

    // Create a mutation observer to watch for changes to the class attribute
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    // Clean up the observer on component unmount
    return () => {
      observer.disconnect()
    }
  }, [])

  return isDarkMode
}

export default useDarkMode
