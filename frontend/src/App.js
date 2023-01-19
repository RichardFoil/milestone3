import React from 'react';
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./users/Login"
import Signup from "./users/Signup"
import Home from "./Home"
import About from './About';
import Navbar from './Navbar';
import  CurrentUserProvider from './contexts/CurrentUser'



function App() {
  return ( 
    <CurrentUserProvider>
        <div className="App">
            <div className="background_image">
              <>
                  <BrowserRouter>
                  <Navbar></Navbar>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/About" element={<About />}/>
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<Signup />}/>
                    </Routes>
                  </BrowserRouter>
              </>
              </div>
            </div>
    </CurrentUserProvider>
  )
}

export default App
