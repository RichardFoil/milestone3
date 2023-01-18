import '../App.css';
import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { CurrentUserContext } from '../contexts/CurrentUserProvider'



function Login() {
    const navigate = useNavigate();
    const { setCurrentUser } = useContext(CurrentUserContext)
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/authentication/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        const data = await response.json();
        if (response.status === 200) {
            localStorage.setItem('token', data.token);
            setCurrentUser(data.user);
            navigate(`/`);
        } else {
            navigate('/login');
        }
    }

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
    <div className="LoginContainer">
      <div className="form-container">
      <form onSubmit={handleSubmit} className="form-style">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={credentials.email}
          onChange={e => setCredentials({ ...credentials, email: e.target.value })}
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={e => setCredentials({ ...credentials, password: e.target.value })}
        />
        <br />
        <br />
        <input type="submit" value="Login" className="submit-button" />
      </form>
    </div>
    </div>
    </div>
  );
}

export default Login;

