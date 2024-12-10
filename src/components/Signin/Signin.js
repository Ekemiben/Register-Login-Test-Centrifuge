import React from 'react'

import { useState } from "react";
import { Link, useNavigate, BrowserRouter } from "react-router-dom";
import "./signin.css"

const Signin = () => {

    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const navigate = useNavigate()
    const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
        }));
         };
    console.log(formData)
    const handleSumit = async(e)=>{
    e.preventDefault()
    try {
 
      const res = await fetch('https://be.optimaxsuites.com/x/api/v2/auth/signin',
        {
          method:"POST",
          headers:{
            "Content-Type": "application/json",
          },
           body: JSON.stringify({
                username: formData.username,
                password: formData.password,
                project: 'ERP', 
                apiKey: 'ApiKey 8e2da356563ef460e52d56e83d73b8ee'
        })  
        }
  
      );
      const data = await res.json();
       if (!data.success) {
        setError(data.message || "An error occurred");
        setLoading(false); 
        return;
      }
     
      setError(null); 
      alert("Login successful")
      setLoading(false); 
      
    } catch (error) {
     
     console.error("Fetch error:", error);
      setError("An error occurred. Please try again later.");
      setLoading(false); 
    
    }
   
  }

  return (
     <div className='sign-up-cover'>
               
              <form onSubmit={handleSumit} >
                <h1>Sign In</h1> 
                  <div className='input-cover'>
                 
                  <input
                      type="text"
                      placeholder='username'
                      id='username'
                      onChange={handleChange} />
                  <input
                      type="password"
                      placeholder='Password'
                      id='password'
                      onChange={handleChange} />
                    <p>{error}</p>
                  </div>
                  <div className='btn-cover'>
                      <button disabled={loading}>Login</button>
              </div>
              <br></br>
                  <div className="sign-up ">
                      
                <p>You don't have an account?</p>
                <Link to={"/"}><span style={{color:"blue", marginLeft: "20px"}}>Sign Up</span></Link>
                </div>
              </form>
    </div>
  )
}
export default Signin
