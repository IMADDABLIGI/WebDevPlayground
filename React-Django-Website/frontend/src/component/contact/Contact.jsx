import React, { useState } from 'react'
import leftImage from '../../assets/pizzaLeft.jpg'
import '../../styles/Contact.css'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import { Navigate } from 'react-router-dom'
import axios from "axios"

function Contact() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isAuthenticate, SetIsAuthenticate] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/token/", {username, password})
      if (res.status === 200){
        console.log(res.data.access);
        SetIsAuthenticate(true)
      }
    } catch (error) {
      if (error.response) {
        console.log("Error response from server:", error.response.data);
        console.log("Status code:", error.response.status);
        if (error.response.data.detail)
            alert(error.response.data.detail)

      } else {
          // Something happened in setting up the request that triggered an error
          console.log("Error:", error.message);
          alert(error.message)
        }
      }
  }

  return (
    <>
      <NavBar />
      
      <div className='contact'>
          <div className='leftSide' style={{backgroundImage: `url(${leftImage})`}} />
          
          <div className='rightSide'>
            <h1> Contact Us </h1>
            <form id='contactForm' onSubmit={handleSubmit}>
              <input 
              type='text' 
              value = {username}
              onChange={(e) => setUsername(e.target.value)} 
              placeholder='Enter Email...' />
              <input 
              type='password' 
              value = {password}
              onChange={(e) => setPassword(e.target.value)} 
              placeholder='Enter password...' />
              <button className='link' type="submit"> login </button>
            </form>
          </div>
      </div>
      <Footer />
      {isAuthenticate === true && <Navigate to="/" />}
    </>
  )
}

export default Contact
