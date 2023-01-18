import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import '../App.css';


function SignUp() {
  const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	})
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  
  async function handleSubmit(e) {
    e.preventDefault()

    await fetch(`http://localhost:5000/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    setMessage('Congratulations, you are now signed up!')
  }

  useEffect(() => {
    if (message) {
      navigate('/login')
    }
  }, [message, navigate])

  return (
    <div className='container'>
      <h1 className='Header'>Welcome to our BarCrawl App</h1>
      <div className='NavbarContainer'>
      <nav className='Navbar'>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="signup">Signup</a>
          </li>
        </ul>
      </nav>
      </div>
    <div className="SignupContainer">
      <div className="form-container">
      <form onSubmit={handleSubmit} className="form-style">
        <label htmlFor="first-name">First Name:</label>
        <input
							required
							value={user.firstName}
							onChange={e => setUser({ ...user, firstName: e.target.value })}
							className="form-control"
							id="firstName"
							name="firstName"
						/>
        <br />
        <br />
        <label htmlFor="last-name">Last Name:</label>
        <input
							required
							value={user.lastName}
							onChange={e => setUser({ ...user, lastName: e.target.value })}
							className="form-control"
							id="lastName"
							name="lastName"
						/>
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
							type="email"
							required
							value={user.email}
							onChange={e => setUser({ ...user, email: e.target.value })}
							className="form-control"
							id="email"
							name="email"
						/>
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
							type="password"
							required
							value={user.password}
							onChange={e => setUser({ ...user, password: e.target.value })}
							className="form-control"
							id="password"
							name="password"
						/>
        <br />
        <br />
        <input type="submit" value="Sign Up" className="submit-button" />
      </form>
    </div>
    </div>
    </div>
  );
}


export default SignUp;

