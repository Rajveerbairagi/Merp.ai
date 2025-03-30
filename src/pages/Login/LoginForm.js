import React, { useState } from 'react';
import { LoginContainer } from './LoginStyles';
import LoginHeader from './LoginHeader';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email); // Pass email to parent, backend dev will handle auth
    } else {
      alert('Please fill in both fields!');
    }
  };

  return (
    <LoginContainer>
      <LoginHeader />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
        <button type="submit">Let’s Go!</button>
      </form>
      <div className="signup-link">
        New here? <a href="#">Join the Fun!</a>
      </div>
    </LoginContainer>
  );
}

export default LoginForm;