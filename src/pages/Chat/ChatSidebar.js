import React from 'react';
import { Sidebar } from './ChatStyles';

function ChatSidebar({ user, chatSessions, currentChatIndex, setCurrentChatIndex }) {
  return (
    <Sidebar>
      <div className="sidebar-header">
        <div className="user-profile">
          <img src="https://via.placeholder.com/40" alt="You!" />
          <div className="user-info">
            <div className="username">{user.username}</div>
            <div className="email">{user.email}</div>
          </div>
        </div>
        <div className="history-title">Your Chats</div>
      </div>
      <div className="chat-history">
        {chatSessions.map((session, index) => (
          <div
            key={index}
            className="history-item"
            onClick={() => setCurrentChatIndex(index)}
            style={{
              background: currentChatIndex === index ? 'rgba(255, 255, 255, 0.2)' : '',
            }}
          >
            {session.title}
          </div>
        ))}
      </div>
    </Sidebar>
  );
}

export default ChatSidebar;