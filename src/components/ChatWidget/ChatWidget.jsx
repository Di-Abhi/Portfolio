// src/components/ChatWidget/ChatWidget.jsx
import React, { useState } from "react";
import "./ChatWidget.css";
import { FaComments, FaTimes } from "react-icons/fa";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <h4>Chat with Me</h4>
            <button onClick={toggleChat}><FaTimes /></button>
          </div>
          <div className="chat-body">
            <p>Hey! 👋 How can I help you today?</p>
            <input type="text" placeholder="Type your message..." />
            <button className="send-btn">Send</button>
          </div>
        </div>
      )}

      <button className="chat-toggle" onClick={toggleChat}>
        <FaComments />
      </button>
    </div>
  );
};

export default ChatWidget;
