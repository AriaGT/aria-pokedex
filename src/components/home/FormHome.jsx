import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserNameGlobal } from '../../store/slices/userName.slice'
import { toggleState } from '../../store/slices/logged.slice'
import { useNavigate } from 'react-router-dom'

const FormHome = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const setUserName = e => {
    e.preventDefault()
    dispatch(setUserNameGlobal(e.target.firstChild.value.trim()))
    dispatch(toggleState(true))
    navigate('/pokedex')
  }

  return (
    <form className='pokedex__form' onSubmit={setUserName}>
      <input className='pokedex__input' type="text" placeholder="Type your name"/>
      <button className='pokedex__btn'>Submit</button>
    </form>
  )
}

export default FormHome