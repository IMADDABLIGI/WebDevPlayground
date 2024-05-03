import React from 'react'
import '../../styles/Register.css'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import { useState } from 'react'
import axios from "axios"

function Register() {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password)

        try {
            const res = await axios.post("http://127.0.0.1:8000/api/register/", {
                username, password })
            if (res.status === 200){
                console.log("Register Success")
            }
        } 
        catch (error) {
            console.log(error)
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