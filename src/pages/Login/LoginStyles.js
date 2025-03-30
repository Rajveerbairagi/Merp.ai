import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.5s ease-in;
  margin: 20px 0;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(45deg, #fff, #af2ba5);
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #ddd;
    margin-bottom: 20px;
  }

  form {
    width: 100%;
  }

  input {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: none;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.9);
    color: #333;
    font-size: 1rem;
    outline: none;
  }

  .forgot-password {
    display: block;
    text-align: right;
    color: #af2ba5;
    font-size: 0.9rem;
    margin-bottom: 20px;
    text-decoration: none;
  }

  button {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 25px;
    background: #365e93;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s;
    &:hover {
      background: #af2ba5;
    }
  }

  .signup-link {
    margin-top: 15px;
    font-size: 0.9rem;
    color: #ddd;
    a {
      color: #af2ba5;
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    width: 100%;
    h1 { font-size: 2rem; }
    p { font-size: 0.9rem; }
    input { padding: 10px; font-size: 0.9rem; }
    button { padding: 10px; font-size: 0.9rem; }
  }
`;