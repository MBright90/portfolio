import type React from 'react'
import { useState } from 'react'

import style from './ContactForm.module.scss'

const ContactForm: React.FC = () => {
  const [emailInputValue, setEmailInputValue] = useState<string>('')
  const [emailValidity, setEmailValidity] = useState<boolean>(true)

  const [messageInputValue, setMessageInputValue] = useState<string>('')
  const [messageValidity, setMessageValidity] = useState<boolean>(true)

  const validateEmail = (emailStr: string): boolean => {
    const emailRegEx: RegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    return !!emailRegEx.test(emailStr)
  }

  const validateMessage = (messageStr: string): boolean => {
    return messageStr.length > 10
  }

  const handleSenderInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmailValidity(validateEmail(event.target.value))
    setEmailInputValue(event.target.value)
  }

  const handleMessageInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessageValidity(validateMessage(event.target.value))
    setMessageInputValue(event.target.value)
  }

  const validateInput = (event: React.MouseEvent<HTMLButtonElement>): boolean => {
    event.preventDefault()
    return true
  }

  return (
    <form className={style.formContainer}>
      <div className={style.inputContainer}>
        <label htmlFor="sender-input">Email</label>
        <input
          id="sender-input"
          name="sender-input"
          className={`${style.formInput} ${emailValidity ? null : style.invalidInput}`}
          type="text"
          value={emailInputValue}
          onChange={handleSenderInputChange}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="message-input">Message</label>
        <textarea
          id="message-input"
          name="message-input"
          className={`${style.formInput} ${messageValidity ? null : style.invalidInput}`}
          value={messageInputValue}
          onChange={handleMessageInputChange}
        />
      </div>

      <button className={style.formButton} onClick={validateInput}>
        SEND
      </button>
    </form>
  )
}

export default ContactForm
