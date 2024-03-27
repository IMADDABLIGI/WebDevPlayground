import React from 'react'

function MenuItem({Item}) {
  return (
    <div className='item'>
        <div style={{backgroundImage: `url(${Item.image})`}} />
        {/* {Item.name} */}
    </div>
  )
}

export default MenuItem
