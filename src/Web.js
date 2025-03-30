import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoginForm from './pages/Login/LoginForm';
import OfferList from './pages/WhatWeOffer/OfferList';
import ChatPage from './pages/Chat/ChatPage';

const WebContainer = styled.div`
  background: linear-gradient(90deg, #365e93, #af2ba5);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

function Web() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(storedUser);
    }
  }, []);

  const handleLogin = (email) => {
    const userData = { username: email.split('@')[0], email };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <WebContainer>
      {isLoggedIn ? (
        <ChatPage user={user} onLogout={handleLogout} />
      ) : (
        <>
          <LoginForm onLogin={handleLogin} />
          <OfferList />
        </>
      )}
    </WebContainer>
  );
}

export default Web;