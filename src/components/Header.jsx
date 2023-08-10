import React from 'react'

const Header = ( { text, bgColor = 'rgba(0, 0, 0, .4)', textColor = '#ff6a95' }) => {
    const style = {
        backgroundColor: bgColor,
        color: textColor
    }

  return (
    <header style={style}>
        <div className='container'>
            <h2>{ text }</h2>
        </div>
    </header>
  )
}

export default Header
