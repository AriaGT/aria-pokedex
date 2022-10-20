import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/cardPoke.css' 

const CardPoke = ({url}) => {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/pokedex/${pokemon.id}/`)
  }

  return (
    <article onClick={handleClick} className={`card-poke ${pokemon?.types[0].type.name}`}>
      <header className='card-poke__header'>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} loading="lazy" alt="pokemon__img" />
      </header>
      <section className='card-poke__body'>
        <h3 className='card-poke__name'>{pokemon?.name}</h3>
        <ul className='card-poke__types-container'>
          {
            pokemon?.types.map(type =>
              <li key={type.type.url} className='card-poke__type'>{type.type.name}</li>
            )
          }
        </ul>
        <p className='card-poke__type-label'>Type</p>
      </section>
      <ul className='card-poke__stats-container'>
        <li key='hp' className='card-poke__stat'>
          <span className='card-poke__stat-label'>{pokemon?.stats[0].stat.name}</span>
          <span className='card-poke__stat-number'>{pokemon?.stats[0].base_stat}</span>
        </li>
        <li key='attack' className='card-poke__stat'>
          <span className='card-poke__stat-label'>{pokemon?.stats[1].stat.name}</span>
          <span className='card-poke__stat-number'>{pokemon?.stats[1].base_stat}</span>
        </li>
        <li key='defense' className='card-poke__stat'>
          <span className='card-poke__stat-label'>{pokemon?.stats[2].stat.name}</span>
          <span className='card-poke__stat-number'>{pokemon?.stats[2].base_stat}</span>
        </li>
        <li key='speed' className='card-poke__stat'>
          <span className='card-poke__stat-label'>{pokemon?.stats[5].stat.name}</span>
          <span className='card-poke__stat-number'>{pokemon?.stats[5].base_stat}</span>
        </li>
      </ul>
    </article>
  )
}

export default CardPoke