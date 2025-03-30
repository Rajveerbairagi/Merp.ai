import React, { useState, useEffect, useRef } from 'react';
import { ChatContainer } from './ChatStyles';
import ChatSidebar from './ChatSidebar';
import ChatMain from './ChatMain';

function ChatPage({ user, onLogout }) {
  const [chatSessions, setChatSessions] = useState([]);
  const [currentChatIndex, setCurrentChatIndex] = useState(-1);
  const [input, setInput] = useState('');
  const chatBodyRef = useRef(null);

  useEffect(() => {
    const storedSessions = JSON.parse(localStorage.getItem('chatSessions')) || [];
    if (storedSessions.length === 0) {
      const defaultChat = {
        title: 'Chat 1',
        messages: [{ role: 'bot', content: 'Hey there! How can I help you today?' }],
      };
      setChatSessions([defaultChat]);
      setCurrentChatIndex(0);
      localStorage.setItem('chatSessions', JSON.stringify([defaultChat]));
    } else {
      setChatSessions(storedSessions);
      setCurrentChatIndex(storedSessions.length - 1);
    }
  }, []);

  const startNewChat = () => {
    const newChat = {
      title: `Chat ${chatSessions.length + 1}`,
      messages: [{ role: 'bot', content: 'Hey there! How can I help you today?' }],
    };
    updateSessions([...chatSessions, newChat], chatSessions.length);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    let updatedSessions = [...chatSessions];
    if (currentChatIndex === -1) startNewChat();
    updatedSessions = [...chatSessions];

    const userMessage = { role: 'user', content: input };
    updatedSessions[currentChatIndex].messages.push(userMessage);
    setChatSessions(updatedSessions); // Update UI immediately with user message

    try {
      // API call to the backend chatbot
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          chatId: currentChatIndex,
          userId: user.email,
        }),
      });

      const data = await response.json();
      const botReply = { role: 'bot', content: data.reply };

      updatedSessions = [...chatSessions];
      updatedSessions[currentChatIndex].messages.push(botReply);
      updateSessions(updatedSessions, currentChatIndex);
    } catch (error) {
      console.error('Chat API error:', error);
      const errorReply = { role: 'bot', content: 'Oops! Something went wrong. Try again!' };
      updatedSessions = [...chatSessions];
      updatedSessions[currentChatIndex].messages.push(errorReply);
      updateSessions(updatedSessions, currentChatIndex);
    }

    setInput('');
    scrollToBottom();
  };

  const handleClearChat = () => {
    if (currentChatIndex !== -1) {
      const updatedSessions = [...chatSessions];
      updatedSessions[currentChatIndex].messages = [
        { role: 'bot', content: 'Hey there! How can I help you today?' },
      ];
      updateSessions(updatedSessions, currentChatIndex);
    }
  };

  const updateSessions = (sessions, index) => {
    setChatSessions(sessions);
    setCurrentChatIndex(index);
    localStorage.setItem('chatSessions', JSON.stringify(sessions));
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      if (chatBodyRef.current) chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }, 0);
  };

  return (
    <ChatContainer>
      <ChatSidebar
        user={user}
        chatSessions={chatSessions}
        currentChatIndex={currentChatIndex}
        setCurrentChatIndex={setCurrentChatIndex}
      />
      <ChatMain
        chatSessions={chatSessions}
        currentChatIndex={currentChatIndex}
        input={input}
        setInput={setInput}
        onSendMessage={handleSendMessage}
        onClearChat={handleClearChat}
        onLogout={onLogout}
        chatBodyRef={chatBodyRef}
        startNewChat={startNewChat}
      />
    </ChatContainer>
  );
}

export default ChatPage;
