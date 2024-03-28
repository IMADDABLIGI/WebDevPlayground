import React from 'react'

function MenuItem({Item}) {
  return (
    <div className='item'>
        <div style={{backgroundImage: `url(${Item.image})`}} />
        <h2> {Item.name} </h2>
        <p> ${Item.price} </p>
    </div>
  )
}

export default MenuItem
