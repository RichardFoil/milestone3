import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./users/Login"
import Signup from "./users/Signup"
import Home from "./Home"
import CurrentUserProvider from "./context/CurrentUser"


function App() {
  return ( 
    <div className="App">
        <div className="background_image">
          <div className="content-container">
            <CurrentUserProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />}/>
                </Routes>
              </BrowserRouter>
            </CurrentUserProvider>
          </div>
        </div>
    </div>


  )
}

export default App
