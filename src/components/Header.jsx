import React from 'react'
import { Link } from 'react-router-dom'

const Header = ( { text, bgColor = 'rgba(0, 0, 0, .4)', textColor = '#ff6a95' }) => {
    const style = {
        backgroundColor: bgColor,
    }

  return (
    <header style={style}>
        <div className='container'>
            <Link to='/' style={{textDecoration: 'none', color: textColor}}>
              <h2>{ text }</h2>
            </Link>
        </div>
    </header>
  )
}

export default Header
