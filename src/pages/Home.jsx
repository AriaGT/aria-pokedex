import React from 'react'
import { useSelector } from 'react-redux'
import FormHome from "../components//home/FormHome";
import './styles/home.css'

const Home = () => {

  const name = useSelector(state => state.userName)

  return (
    <article className='pokedex'>
      <img className='pokedex__img' src="/images/home/pokedexLogo.svg" alt="" />
      <header className="pokedex__header">
        <h2 className='pokedex__subtitle'>Hello trainer!</h2>
        <p className='pokedex__text'>Give me your name to start</p>
      </header>
      <FormHome />
      <img className='pokedex__pokeball' src="/images/pokeball.png" alt="" />
      <footer className='pokedex__footer'>
        <div className='pokedex__footer__black'></div>
        <div className='pokedex__footer__circle1'>
          <div className='pokedex__footer__circle2'></div>
        </div>
      </footer>
    </article>
  )
}

export default Home