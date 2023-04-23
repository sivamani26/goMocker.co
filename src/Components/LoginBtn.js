import React, { useState } from "react";
import "./LoginBtn.css";

const LoginBtn = () => {
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [errorPass, setErrorPass] = useState("");

  const handleEmailChange = (e) => {
    setUserInput(e.target.value);
  };

  const validateEmail = () => {
    var emailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailformat.test(userInput)) {
      setError("Try to enter currect ID");
    } else {
      setError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validatePassword = () => {
    var passwordformat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;

    if (password === "" || password === null) {
      setErrorPass("password is required");
    } else if (password.length < 4) {
      setErrorPass("password should be at least 4 characters");
    } else if (!passwordformat.test(password)) {
      setErrorPass("not a valid password");
    } else {
      setErrorPass("");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
  };
  return (
    <div className="loginBody">
      <div className="loginBar form-group">
        <div>
          <div className="loginHead">
            <h2>Member Login</h2>
          </div>
          <div>
            <label htmlFor="email">Email</label>

            <input
              className="userInput form-control"
              type="email"
              name="email"
              value={userInput}
              onChange={handleEmailChange}
            />
            <span style={{ color: "red" }}>{error}</span>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <span>
              <input
                name="password"
                onChange={handlePasswordChange}
                value={password}
                className="userInput form-control"
                type="password"
              />
            </span>
            <span style={{ color: "red" }}>{errorPass}</span>
          </div>
        </div>
        <div>
          <button type="submit" onClick={handleLogin} className="btn btn-primary">
            Login
          </button>
        </div>
        <div className="newLogin">
          <a href="#">
            <p>Forget Password?</p>
          </a>
          <a href="#">
            <p>New Buddy? Register Here</p>
          </a>
        </div>
      </div>
      <div className="login_bg">
        <img
          src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4582.jpg?size=626&ext=jpg&ga=GA1.2.959840860.1681976089&semt=sph"
          alt="Login"
        />
      </div>
    </div>
  );
};

export default LoginBtn;
