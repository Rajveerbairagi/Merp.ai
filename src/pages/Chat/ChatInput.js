import React from 'react';
import { ChatMainContainer } from './ChatStyles';

function ChatInput({ input, setInput, onSendMessage, onClearChat }) {
  return (
    <ChatMainContainer>
      <div className="chat-footer">
        <div className="input-wrapper">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && onSendMessage()}
            placeholder="Ask me anything..."
          />
          <div className="input-buttons">
            <button onClick={onSendMessage}>Send</button>
            <button onClick={onClearChat}>Clear</button>
          </div>
        </div>
      </div>
    </ChatMainContainer>
  );
}

export default ChatInput;