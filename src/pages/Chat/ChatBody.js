import React from 'react';
import { ChatMainContainer } from './ChatStyles';

function ChatBody({ chatSessions, currentChatIndex, chatBodyRef }) {
  return (
    <ChatMainContainer>
      <div className="chat-body" ref={chatBodyRef}>
        {currentChatIndex === -1 ? (
          <div className="message bot">
            <div className="content">Hey there! How can I help you today?</div>
          </div>
        ) : (
          chatSessions[currentChatIndex]?.messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.role}`}>
              <div className="content">{msg.content}</div>
            </div>
          ))
        )}
      </div>
    </ChatMainContainer>
  );
}

export default ChatBody;