import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';

import app from '../../firebase'



const LoginPage = () => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(false);
  const {register, watch, formState: {errors}, handleSubmit} = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("")

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, data.email, data.password);
    }catch(error) {
      console.error(error);
      setErrorFromSubmit(error.message);
      setTimeout(() => {
        setErrorFromSubmit("");    
      }, 3000)
    }finally {
      setLoading(false);
    }
  
  }
  return (
    <div className='auth-wrapper'>
    <div style = {{ textAlign : 'center' }}>
      <h3>Login</h3>
    </div>
    <form onSubmit= {handleSubmit(onSubmit)}>
      <label htmlFor = 'email'>Email</label>
      <input 
        name = 'email'
        type = 'email'
        id = 'email'
        {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
      />
      {errors.email && <p>This email field is required</p>}

      <label htmlFor = 'password'>password</label>
      <input 
        name = 'password'
        type = 'password'
        id = 'password'
        {...register("password", {required: true, maxLength : 6})}
      />
        {errors.email && errors.name.type === "required" && <p>This password field is required</p>}
        {errors.name && errors.name.type === "maxLength" && <p>your input exceed maxinum length</p>}

        {errorFromSubmit &&
        <p>{errorFromSubmit}</p>}
      <input type ='submit' disabled = {loading} />
      <Link style = {{ color : 'gray', textDecoration : 'none'}} to ={'/register'}>아직 아이디가 없다면...</Link>
    </form>
  </div>
  )
}

export default LoginPage