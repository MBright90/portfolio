import type React from 'react'
import { useState } from 'react'

import style from './ContactForm.module.scss'

const ContactForm: React.FC = () => {
  const [senderInputValue, setSenderInputValue] = useState<string>('')
  const [messageInputValue, setMessageInputValue] = useState<string>('')

  const handleSenderInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSenderInputValue(event.target.value)
  }

  const handleMessageInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessageInputValue(event.target.value)
  }

  const validateInput = (): boolean => {
    return true
  }

  return (
    <form className={style.formContainer}>
      <div className={style.inputContainer}>
        <label htmlFor="sender-input"></label>
        <input
          id="sender-input"
          name="sender-input"
          className={style.formInput}
          type="text"
          value={senderInputValue}
          onChange={handleSenderInputChange}
        />
      </div>
      <div>
        <label htmlFor="message-input"></label>
        <textarea
          id="message-input"
          name="message-input"
          className={style.formInput}
          value={messageInputValue}
          onChange={handleMessageInputChange}
        />
      </div>

      <button onClick={validateInput}>Send</button>
    </form>
  )
}

export default ContactForm
