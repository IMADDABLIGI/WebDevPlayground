import React from 'react'
import './test.css'
import video from '../../assets/video.mp4'

function Test() {
  return (
    <div className='test'>
        <div className='circle'>
            Random Text here
        </div>
        <p className="filter"> And then he dies.</p>
        <input type="text" className="input" placeholder='Write something here... '/>
        <video src={video} controls>
        </video>
        <a href="https://github.com" className="github"> Github </a>
    </div>
  )
}

export default Test
