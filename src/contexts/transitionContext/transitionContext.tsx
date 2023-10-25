import type React from 'react'
import { createContext, useState } from 'react'

export interface TransitionContextInterface {
  transitionActive: boolean
  setTransitionStatus: (bool: boolean) => void
}

interface TransitionProviderProps {
  children: React.ReactNode | React.ReactNode[]
}

export const transitionContext = createContext<TransitionContextInterface>({
  transitionActive: false,
  setTransitionStatus: (bool: boolean): void => {}
})

const TransitionContextProvider: React.FC<TransitionProviderProps> = ({ children }) => {
  const [transitionActive, setTransitionActive] = useState<boolean>(false)

  const setTransitionStatus = (bool: boolean): void => {
    setTransitionActive(bool)
  }

  const contextValue = {
    transitionActive,
    setTransitionStatus
  }
  return <transitionContext.Provider value={contextValue}>{children}</transitionContext.Provider>
}

export default TransitionContextProvider
