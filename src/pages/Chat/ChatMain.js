import React from 'react';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatInput from './ChatInput';

function ChatMain({
  chatSessions,
  currentChatIndex,
  input,
  setInput,
  onSendMessage,
  onClearChat,
  onLogout,
  chatBodyRef,
  startNewChat,
}) {
  return (
    <div className="chat-main">
      <ChatHeader onLogout={onLogout} startNewChat={startNewChat} />
      <ChatBody chatSessions={chatSessions} currentChatIndex={currentChatIndex} chatBodyRef={chatBodyRef} />
      <ChatInput input={input} setInput={setInput} onSendMessage={onSendMessage} onClearChat={onClearChat} />
    </div>
  );
}

export default ChatMain;