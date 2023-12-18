import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import Home from "../Components/Home";
import { Link } from "react-router-dom";

function UserLogin() {
  const navigate = useNavigate();

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      // Make API request to check credentials
      const response = await fetch("http://localhost:4000/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();

        // Find user based on email
        const user = data.find((user) => user.email === email.value);

        if (user) {
          if (user.password === password.value) {
            setIsSubmitted(true);
            alert("Login Successful");
            navigate("/home");
          } else {
            setErrorMessages({ name: "password", message: "Invalid password" });
          }
        } else {
          setErrorMessages({ name: "email", message: "User not found" });
        }
      } else {
        throw new Error("Error fetching user data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="page">
      <main className="main page__main">
        <form onSubmit={handleSubmit} className="login-form main__login-form">
          <h3 className="login-form__title">Sign In</h3>
          <label className="login-form__label" htmlFor="email">
            <span className="sr-only">Email</span>
            <input className="login-form__input" id="email" type="email" name="email" placeholder="Email" required />
            {renderErrorMessage("email")}
          </label>
          <label className="login-form__label" htmlFor="password">
            <span className="sr-only">Password</span>
            <input className="login-form__input" id="password" type="password" name="password" placeholder="Password" required />
            {renderErrorMessage("password")}
          </label>
          <button className="primary-btn" type="submit">Login</button>
          <div className="login-form__footer">
            <a className="login-form__link">Forgot Password?</a>
            <Link to="/create_user_Acc" className="login-form__link">Sign Up</Link>
          </div>
        </form>
      </main>
    </div>
  );

  return (
    <div>
      {isSubmitted ? <Home /> : renderForm}
    </div>
  );
}

export default UserLogin;
