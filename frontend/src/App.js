import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"


function App() {
  return ( 
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    <h1 className="header">
      Welcome to our BarCrawl App
    </h1>
    <nav>
      <a href="#home">Home</a>
      <form>
        <input type="text" placeholder="Search..."/>
      </form>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a href="/login">Login</a>
    </nav>


    <img className="background" src="https://images.unsplash.com/photo-1597290282695-edc43d0e7129?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80" alt="Bar Pic" />
    
    </div>
  )
}

export default App
