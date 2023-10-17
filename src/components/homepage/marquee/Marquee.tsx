import React from 'react'

import style from './Marquee.module.scss'

interface MarqueeProps {
  position: 'top' | 'right' | 'bottom' | 'left'
  itemArr: string[]
}

const Marquee: React.FC<MarqueeProps> = ({ position, itemArr }) => {
  const renderedItems = itemArr.map((item, index) => (
    <React.Fragment key={`frag-${index}`}>
      <li key={index}>{item}</li>
      <li key={`${index}-bullet`} className={style.marqueeBullet}>
        &
      </li>
    </React.Fragment>
  ))

  return (
    <div className={`${style.marquee} ${style[`${position}`]}`}>
      <ul>{renderedItems}</ul>
      <ul>{renderedItems}</ul>
      <ul>{renderedItems}</ul>
    </div>
  )
}

export default Marquee
