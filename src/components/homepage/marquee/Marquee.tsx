import type React from 'react'
import { useContext, useRef } from 'react'
import { themeContext } from '@contexts/themeContext/ThemeContext'

import style from './Marquee.module.scss'

interface MarqueeProps {
  position: 'top' | 'right' | 'bottom' | 'left'
  itemArr: string[]
}

const Marquee: React.FC<MarqueeProps> = ({ position, itemArr }) => {
  const { theme } = useContext(themeContext)

  const ulRef = useRef<HTMLUListElement | null>(null)
  const clonedUlRef = useRef<HTMLUListElement | null>(null)

  //   const [listWidth, setListWidth] = useState<number>(10)

  //   useLayoutEffect(() => {
  //     if (ulRef.current !== null && clonedUlRef.current !== null) {
  //       const listItems = ulRef.current.querySelectorAll('li')
  //       let totalWidth = 10

  //       listItems.forEach((item) => {
  //         totalWidth += item.getBoundingClientRect().width + 40
  //       })

  //       setListWidth(totalWidth)
  //     }
  //   }, [])

  const renderedItems = itemArr.map((item, index) => (
    <>
      <li key={index}>{item}</li>
      <li className={style.marqueeBullet}>&</li>
    </>
  ))

  return (
    <div className={`${style.marquee} ${style[`${position}`]}  ${theme}`}>
      <ul ref={ulRef}>{renderedItems}</ul>
      <ul ref={clonedUlRef}>{renderedItems}</ul>
    </div>
  )
}

export default Marquee
