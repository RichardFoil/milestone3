import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./users/Login"
import Signup from "./users/Signup"
import Home from "./Home"


function App() {
  return ( 
    <div className="App">
        <div className="background_image">
          <div className="content-container">
            <>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />}/>
                </Routes>
              </BrowserRouter>
            </>
          </div>
        </div>
    </div>


  )
}

export default App
