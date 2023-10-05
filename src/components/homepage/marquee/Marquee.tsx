import type React from 'react'
import { useContext, useEffect, useRef, useState } from 'react'
import { themeContext } from '@contexts/themeContext/ThemeContext'

import style from './Marquee.module.scss'

interface MarqueeProps {
  position: 'top' | 'right' | 'bottom' | 'left'
  liStrArr: string[]
}

const Marquee: React.FC<MarqueeProps> = ({ position, liStrArr }) => {
  const { theme } = useContext(themeContext)

  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const ulRef = useRef<HTMLUListElement | null>(null)
  const clonedUlRef = useRef<HTMLUListElement | null>(null)

  const [listWidth, setListWidth] = useState<number>(0)

  useEffect(() => {
    if (ulRef.current !== null && clonedUlRef.current !== null) {
      const listItems = ulRef.current.querySelectorAll('li')
      let totalWidth = 0

      listItems.forEach((item) => {
        totalWidth += item.getBoundingClientRect().width
      })

      setListWidth(totalWidth)
    }
  })

  const renderedItems = liStrArr.map((item, index) => <li key={index}>{item}</li>)

  return (
    <div className={`${style.marquee} ${style[`${position} ${theme}`]}`} ref={wrapperRef}>
      <ul ref={ulRef} style={{ width: `${listWidth}px` }}>
        {renderedItems}
      </ul>
      <ul ref={clonedUlRef} style={{ width: `${listWidth}px` }}>
        {renderedItems}
      </ul>
    </div>
  )
}

export default Marquee
