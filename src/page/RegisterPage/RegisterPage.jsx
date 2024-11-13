import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import md5 from 'md5';
import app, { db } from '../../firebase'
import {ref, set} from 'firebase/database';

const RegisterPage = () => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(false);
  const {register, watch, formState: {errors}, handleSubmit} = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("")

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const createdUser = await createUserWithEmailAndPassword(auth, data.email , data.password)
      console.log(createdUser);

      await updateProfile(auth.currentUser, {
        displayName : data.name,
        photoURL : `http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`
      })
      
      set(ref(db, `users/${createdUser.user.uid}`),{
        name : createdUser.user.displayName,
        image: createdUser.user.photoURL ,
      })

      console.log(auth.currentUser)
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
        <h3>Register</h3>
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

        <label htmlFor = 'name'>name</label>
        <input 
          name = 'name'
          type = 'text'
          id = 'name'
          {...register("name", {required: true, maxLength : 10})}
        />
        {errors.email && errors.name.type === "required" && <p>This name field is required</p>}
        {errors.name && errors.name.type === "maxLength" && <p>your input exceed maxinum length</p>}
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
        <Link style = {{ color : 'gray', textDecoration : 'none'}} to = {'/login'}>이미 아이디가 있다면...</Link>
      </form>
    </div>
  )
}

export default RegisterPage