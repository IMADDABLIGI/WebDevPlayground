import React from 'react'
import "./Position.css"
import Relative from './Relative' 
import Fixed from './Fixed'
import Absolute from './Absolute'

function Position() {
  return (
    <div className='positon-page'>
      {/* <Relative /> */}
      {/* <Fixed />  */}
      <Absolute />
    </div>
  )
}

export default Position


{/* Relative : Positioned relative to where it normally is */}
{/* Fixed : Positioned relative to the viewport */}