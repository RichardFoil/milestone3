import { useState, useEffect } from "react"

import '../App.css';

function SignUp() {
  const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	})

  async function handleSubmit(e) {
    e.preventDefault()

    await fetch(`http://localhost:5000/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
  }

  return (
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
  );
}

export default SignUp;

