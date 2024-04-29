import React from 'react'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import Image from '../../assets/pizza.jpeg'
import {Link} from 'react-router-dom'
import '../../styles/Home.css'


function Home() {
  return (
    <>
      <NavBar />
      <div className='main' style={{backgroundImage:`url(${Image})`}}>
        <h1> Pizzeria </h1>
        <p> PIZZA TO FIT ANYTASTE </p>
        <Link to='/menu' className='orderButton'> Order Now </Link>
      </div>
      <Footer />
    </>
  )
}

export default Home

// Icons Instalation : npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material