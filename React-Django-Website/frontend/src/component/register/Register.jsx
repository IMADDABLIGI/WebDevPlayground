import React from 'react'
import '../../styles/Register.css'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import { useState } from 'react'
import axios from "axios"

function Register() {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };      

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);
        if (isValidEmail(username) === false)
            alert ("Please enter a valid email address.")
        else
            try {
                const res = await axios.post("http://127.0.0.1:8000/api/register/", {
                    username, password })
                if (res.status === 200){
                    console.log("Register Success")
                }
            } 
            catch (error) {
                if (error.response) {
                    console.log("Error response from server:", error.response.data);
                    console.log("Status code:", error.response.status);
                    
                    if (error.response.data.username)
                        alert(error.response.data.username[0])

                } else {
                    // Something happened in setting up the request that triggered an error
                    console.log("Error:", error.message);
                }
            }
    }

    return (
    <>
    <NavBar />
    <div className='page' >
        <form className='form-container' onSubmit={handleSubmit}>
            <h1> Sign Up </h1>
            <input
                type='text'
                value={username}  
                onChange={(e) => setUserName(e.target.value)}
                placeholder='UserName...'
                />
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password...'
            />
            <button type="submit"> Sign Up </button>
        </form>
    </div>
    <Footer />
    </>
  )
}

export default Register

// style={{backgroundImage: `url(${leftImage})`}}