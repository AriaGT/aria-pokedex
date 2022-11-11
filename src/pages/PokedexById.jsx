import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CardPokeBig from '../components/pokedex/CardPokeBig'
import Pokemon404 from '../components/pokedexId/Pokemon404'
import Header from '../components/shared/Header'
import './styles/pokedexById.css'

const PokedexById = () => {

  const {id} = useParams()
  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState('loading')
  const [loadingScreen, setLoadingScreen] = useState('loading')

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
    .then(res => {
      setPokemon(res.data)
      setHasError(false)
      setLoadingScreen('not-loading')
    })
    .catch(err => {
      setHasError(true)
      setLoadingScreen('not-loading')
    })
  }, [])

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/pokedex')
  }

  const goBack = ' Go back to Pokedex'

  return (
    <>
      <div className={`pokedexById ${loadingScreen}`}>
        <Header />
        {
          (hasError) ?
          <Pokemon404 />
          :
          <CardPokeBig 
            pokemon={pokemon}
          />
        }
      </div>
      <button onClick={handleClick} className='button__back'><i className="fa-solid fa-arrow-left"></i>{goBack}</button>
    </>
  )
}

export default PokedexById