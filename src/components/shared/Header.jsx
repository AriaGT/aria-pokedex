import React from 'react'
import './styles/header.css'

const Header = () => {
  return (
    <header className='header'>
        <div className='header__black'></div>
        <div className='header__circle1'>
          <div className='header__circle2'></div>
        </div>
        <img className='header__img' src="/images/home/pokedexLogo.png" alt="" />
      </header>
  )
}

export default Header