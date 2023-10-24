import { useState } from 'react'

export interface TransitionHookReturnType {
  transitionBool: boolean
  setTransition: () => void
  removeTransition: () => void
}

function useTransition(): TransitionHookReturnType {
  const [transitionBool, setTransitionBool] = useState<boolean>(false)

  const setTransition = (): void => {
    setTransitionBool(true)
  }

  const removeTransition = (): void => {
    setTransitionBool(false)
  }

  return { transitionBool, setTransition, removeTransition }
}

export default useTransition
