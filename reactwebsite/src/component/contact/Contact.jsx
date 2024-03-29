import React from 'react'
import leftImage from '../../assets/pizzaLeft.jpg'
import '../../styles/Contact.css'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'

function Contact() {
  return (
    <>
    <NavBar />
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${leftImage})`}} />
        
        <div className='rightSide'>
          <h1> Contact Us </h1>
          <form id='contactForm'>
            <label htmlFor='name' > Full Name </label>
            <input name='name' placeholder='Enter full name...' />
            <label htmlFor='email' > Email </label>
            <input name='email' placeholder='Enter email...' />
            <label htmlFor='message' > Message </label>
            <textarea 
              rows='6'
              name='message'
              placeholder='Enter message...'
              required
            />
            <button> Send Message </button>
          </form>



        </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact
