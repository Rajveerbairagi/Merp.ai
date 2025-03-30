import styled from 'styled-components';

export const ChatContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 85vh;
  display: flex;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
  overflow: scroll;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    min-height: 80vh;
  }
`;

export const Sidebar = styled.div`
  width: 300px;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  overflow-y: auto;

  .sidebar-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }

  .user-profile {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .user-profile img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #365e93;
    border: 2px solid #af2ba5;
  }

  .user-info {
    display: flex;
    flex-direction: column;
  }

  .username {
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
  }

  .email {
    font-size: 0.9rem;
    color: #ddd;
  }

  .history-title {
    font-size: 1.1rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 5px;
  }

  .chat-history {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .history-item {
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
    color: #fff;
    font-size: 0.9rem;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateX(5px);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-height: 180px;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    .sidebar-header { margin-bottom: 10px; }
    .user-profile img { width: 30px; height: 30px; }
    .username { font-size: 1rem; }
    .email { font-size: 0.8rem; }
    .history-title { font-size: 1rem; }
    .history-item { padding: 8px; font-size: 0.9rem; }
  }
`;

export const ChatMainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .chat-header {
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    h1 {
      font-size: 1.8rem;
      font-weight: 600;
      background: linear-gradient(45deg, #fff, #af2ba5);
      -webkit-background-clip: text;
      color: transparent;
    }

    .header-buttons {
      display: flex;
      gap: 10px;

      button {
        padding: 8px 15px;
        border: none;
        border-radius: 20px;
        background: #af2ba5;
        color: #fff;
        cursor: pointer;
        font-size: 0.9rem;
        transition: background 0.3s, transform 0.2s;
        &:hover {
          background: #365e93;
          transform: scale(1.05);
        }
      }
    }
  }

  .chat-body {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    background: transparent;

    .message {
      margin-bottom: 20px;
      display: flex;
      animation: fadeIn 0.3s ease-in;

      &.user {
        justify-content: flex-end;
      }

      &.bot {
        justify-content: flex-start;
      }

      .content {
        max-width: 70%;
        padding: 12px 18px;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        font-size: 1rem;
      }

      &.user .content {
        background: #365e93;
        color: #fff;
      }

      &.bot .content {
        background: rgba(255, 255, 255, 0.15);
        color: #fff;
      }
    }
  }

  .chat-footer {
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(0, 0, 0, 0.1);

    .input-wrapper {
      flex: 1;
      display: flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 25px;
      padding: 5px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

      input {
        flex: 1;
        padding: 12px 20px;
        border: none;
        border-radius: 25px;
        outline: none;
        background: transparent;
        color: #333;
        font-size: 1rem;
      }

      .input-buttons {
        display: flex;
        gap: 5px;
        padding-right: 10px;

        button {
          padding: 8px 15px;
          border: none;
          border-radius: 20px;
          background: #365e93;
          color: #fff;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background 0.3s, transform 0.2s;
          &:hover {
            background: #af2ba5;
            transform: scale(1.05);
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .chat-header {
      padding: 10px 15px;
      h1 { font-size: 1.5rem; }
      .header-buttons button { padding: 6px 12px; font-size: 0.8rem; }
    }
    .chat-body {
      padding: 15px;
      .message .content { max-width: 85%; padding: 10px 15px; font-size: 0.9rem; }
    }
    .chat-footer {
      padding: 15px;
      .input-wrapper input { padding: 10px 15px; font-size: 0.9rem; }
      .input-buttons button { padding: 6px 12px; font-size: 0.8rem; }
    }
  }
`;
