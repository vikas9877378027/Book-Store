import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation and login logic here
    if (adminId === 'admin' && password === 'password') {
      // Successful login
      alert('Login successful!');
    } else {
      // Invalid credentials
      alert('Invalid admin ID or password. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-5 mb-4">Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="adminId" className="form-label">Admin ID</label>
          <input
            type="text"
            className="form-control"
            id="adminId"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
     <Link to="Edit_Add_delete"  > <button type="submit" className="btn btn-primary">Login</button></Link>
      </form>
    </div>
  );
}

export default LoginForm;
