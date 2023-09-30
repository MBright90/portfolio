import type React from 'react'
import { createContext, useState } from 'react'
import { type ContextInterface } from '@customTypes/types'

interface ThemeContextInterface {
  theme: ThemeContextType
  toggleTheme: () => void
}

type ThemeContextType = 'light' | 'dark'

export const themeContext = createContext<ThemeContextInterface>({
  theme: 'dark',
  toggleTheme: () => {}
})

const ThemeContextProvider: React.FC<ContextInterface> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeContextType>('dark')

  const toggleTheme = (): void => {
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
  }

  const contextValue = {
    theme,
    toggleTheme
  }

  return <themeContext.Provider value={contextValue}>{children}</themeContext.Provider>
}

export default ThemeContextProvider
