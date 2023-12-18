import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function UserAcc() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { uname, email, pass, confirmPass, contact } = event.target.elements;

    if (pass.value !== confirmPass.value) {
      setErrorMessages({ message: "Passwords do not match" });
      return;
    }

    const newUser = {
      username: uname.value,
      email: email.value,
      password: pass.value,
      contact: contact.value
    };

    const response = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    });

    if (response.ok) {
      setIsSubmitted(true);
    } else {
      const data = await response.json();
      setErrorMessages({ message: data.message });
    }
  };

  const renderErrorMessage = () => (
    <div className="error">{errorMessages.message}</div>
  );

  const renderForm = (
    <div className="container">
      <form onSubmit={handleSubmit} className="login-form">
        <h3 className="login-form__title">Register Here</h3>
        <div className="form-group">
          <label htmlFor="uname" className="login-form__label">
            Full Name
          </label>
          <input
            type="text"
            name="uname"
            id="uname"
            className="form-control"
            placeholder="Your Full Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="login-form__label">
            E-Mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pass" className="login-form__label">
            Password
          </label>
          <input
            type="password"
            name="pass"
            id="pass"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPass" className="login-form__label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPass"
            id="confirmPass"
            className="form-control"
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact" className="login-form__label">
            Contact
          </label>
          <input
            type="text"
            name="contact"
            id="contact"
            className="form-control"
            placeholder="90909-09090"
            required
          />
        </div>
        {renderErrorMessage()}
        <button type="submit" className="btn primary-btn">
          Create
        </button>
        <div className="login-form__footer">
          <Link to="/" className="login-form__link">
            Already have an account?
          </Link>
          <a href="#" className="login-form__link">
            Contact Us
          </a>
        </div>
      </form>
    </div>
  );

  return (
    <div className="page">
      <main className="main page__main">
        {isSubmitted ? (
          <div className="container">
            <h3 className="login-form__title">Registration Successful!</h3>
            <p>You have successfully created your account.</p>
            <Link to="/" className="btn primary-btn">
              Go to Login
            </Link>
          </div>
        ) : (
          renderForm
        )}
      </main>
    </div>
  );
}

export default UserAcc;
