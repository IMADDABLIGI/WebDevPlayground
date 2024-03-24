import React from 'react'
import Logo from '../../assets/pepperoni.jpg'
import '../../styles/NavBar.css'
import { Link } from 'react-router-dom';


const links = ['Home', 'Menu', 'About', 'Contact'];

function NavBar() {
  return (
    <div className='NavBar'>
        <img src={Logo} />
        <div className='links'>
            {
                links.map((link) => {
                    return (
                        <Link className='link' key={link} to={`/${link}`}> {link} </Link>
                    )
                })
            }
        </div>
        <button> </button>
    </div>
  )
}

export default NavBar
