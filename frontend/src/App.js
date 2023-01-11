import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./users/Login"
import Signup from "./users/Signup"
import Home from "./Home"


function App() {
  return ( 
    
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
