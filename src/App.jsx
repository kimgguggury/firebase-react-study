import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChatPage from './page/ChatPage/ChatPage'
import LoginPage from './page/LoginPage/LoginPage'
import RegisterPage from './page/RegisterPage/RegisterPage'
import './App.css'
import { BrowserRouter,Routes, Route, useNavigate } from 'react-router-dom'
import app from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { clearUser, setUser } from "./store/userSlice";

function App() {
  const [count, setCount] = useState(0)
  const auth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
  
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      
        navigate('/');
      
        if(user) {
          dispatch(setUser({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          }))
      } else {

        navigate('/login');
        dispatch(clearUser());
      }
    })
   

    return () => {
      unsubscribe();
    }
  }, [])
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
