import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import Header from '../components/shared/header'
import './styles/pokedex.css'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [loadingScreen, setLoadingScreen] = useState('loading')
  const [typeSelected, setTypeSelected] = useState('all')

  useEffect(() => {
    if(typeSelected !== 'all') {
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)
          setLoadingScreen('no-loading')
        })
        .catch(err => console.log(err))
    } else {
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0'
    axios.get(URL)
      .then(res => {
        setPokemons(res.data.results)
        setLoadingScreen('no-loading')
      })
      .catch(err => console.log(err))
    }
  }, [typeSelected])

  const userName = useSelector(state => state.userName)

  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(8)
  const initialPoke = (page - 1) * pokePerPage
  const finalPoke = page * pokePerPage

  return (
    <div className={`pokedex ${loadingScreen}`}>
      <Header />
      <aside className="pokedex__top__navbar">
        <p className='pokedex__top__welcome'><span>Welcome  {userName}</span>, here you can find your favorite pokemon.</p>
        <div className='pokedex__top__search'>
          <InputSearch />
          <SelectByType setTypeSelected={setTypeSelected}/>
        </div>
        <Pagination 
          page={page}
          pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
          setPage={setPage}
        />
      </aside>
      <article>
        <div className='card-container'>
          {
            pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
              <CardPoke 
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          }
        </div>
      </article>
    </div>
  )
}

export default Pokedex