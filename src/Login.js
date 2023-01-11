

import React, { useState } from "react"

export default function Login(props) {
  let [loginMode, setLoginMode] = useState("signin")

  const changeLoginMode = () => {
    setLoginMode(loginMode === "Login" ? "signup" : "Login")
  }

  if (loginMode === "signin") {
    return (
      <div className="Login-Form-container">
        <form className="Login-Form">
          <div className="Login-Form-content">
            <h3 className="Login-Form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeLoginMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Login-Form-container">
      <form className="Login-Form">
        <div className="Login-Form-content">
          <h3 className="Login-Form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeLoginMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          </div>
      </form>
    </div>
  )
}