import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChatPage from './page/ChatPage/ChahPage'
import LoginPage from './page/LoginPage/LoginPage'
import RegisterPage from './page/RegisterPage/RegisterPage'
import './App.css'
import {Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path ="/" element={<ChatPage/>}></Route>
        <Route path ="/login" element ={<LoginPage />} />
        <Route path ="/register" element ={<RegisterPage />} />
      </Routes>
    </>
  )
}

export default App
