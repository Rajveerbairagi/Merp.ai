import React from 'react';
import { ChatMainContainer } from './ChatStyles';

function ChatHeader({ onLogout, startNewChat }) {
  return (
    <ChatMainContainer>
      <div className="chat-header">
        <h1>Merp.ai</h1>
        <div className="header-buttons">
          <button onClick={startNewChat}>New Chat</button>
          <button onClick={onLogout}>See Ya!</button>
        </div>
      </div>
    </ChatMainContainer>
  );
}

export default ChatHeader;