import React from 'react'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import '../../styles/Menu.css'
import { MenuList } from '../../helpers/MenuList'
import MenuItem from './MenuItem'


function Menu() {
  return (
    <>
      <NavBar />
      <div className='menu'>
        <h1> Our Menu </h1>

        <div className='menulist'>
            {MenuList.map((Item, key) => {
                return <MenuItem Item={Item} key={key}/>
            })}
        </div>


      </div>
      <Footer />
    </>
  )
}

export default Menu
