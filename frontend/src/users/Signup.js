import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router"

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = {
    firstName,
    lastName,
    email,
    password
  }
  

  async function handleSubmit(e) {
    e.preventDefault()

    await fetch(``, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

     
}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="first-name">First Name:</label>
      <input
        type="text"
        id="first-name"
        name="first-name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <br />
      <br />
      <label htmlFor="last-name">Last Name:</label>
      <input
        type="text"
        id="last-name"
        name="last-name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <br />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <br />
      <input type="submit" value="Sign Up" />
    </form>
  );
}

export default SignUp;
