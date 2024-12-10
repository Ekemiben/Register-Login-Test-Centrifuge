import React from 'react'
import { useState } from 'react'
import './signup.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Signup = () => {

    const [formData, setFormData] = useState({
    });
    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
        }));
         };

    const handleSubmit = async(e)=>{
        e.preventDefault()
         if (formData.password !== formData.conpassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
        setLoading(true);
        
      const res = await fetch('https://be.optimaxsuites.com/x/api/v2/auth/signup',
        {
          method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
             
             body: JSON.stringify({
                username: formData.username,
                email: formData.email,
                password: formData.password,
                project: 'ERP', 
                apiKey: 'ApiKey 8e2da356563ef460e52d56e83d73b8ee'
        })  
        }
  
      );
      const data = await res.json();
      if(data.success === false){
        setLoading(false)
        setError(data.message);
       
        return;
      }
      setLoading(false)
      setError(null)
       console.log(data)
    } catch (error) {
      setLoading(false);
      setError(error.message)
        }

  }

  return (
    <>
    <div className='sign-up-cover'>
               
              <form onSubmit={handleSubmit}>
                  <h1>Sign Up</h1> 
                  <div className='input-cover'>
                  <input type="text" placeholder='Username' id='username' onChange={handleChange} />
                  <input type="email" placeholder='Email' id='email'  onChange={handleChange} />
                  <input type="password" placeholder='Password' id='password' onChange={handleChange} />
                    <input type="password" placeholder='Password' id='conpassword' onChange={handleChange} />
                    <p>{error}</p>
                  </div>
                  <div className='btn-cover'>
                      <button disabled={loading}>Register</button>
                  </div>
                  <br></br>
                  <div className="sign-up ">
                      
                <p>Have an account?</p>
                <Link to={"/sign-in"}><span style={{color:"blue", marginLeft: "20px"}}>Sign in</span></Link>
                </div>
              </form>
        
      </div>
    </>
  )
}

export default Signup
