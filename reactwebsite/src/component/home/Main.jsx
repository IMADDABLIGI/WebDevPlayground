import React from 'react'
import '../../styles/main.css'
import Image from '../../assets/pizza.jpeg'
import {Link} from 'react-router-dom'


function Main() {
  return (
    <div className='main' style={{backgroundImage:`url(${Image})`}}>
        <h1> Pizzeria </h1>
        <p> PIZZA TO FIT ANYTASTE </p>
        <Link to='/home' className='orderButton'> Order Now </Link>
    </div>
  )
}

export default Main
