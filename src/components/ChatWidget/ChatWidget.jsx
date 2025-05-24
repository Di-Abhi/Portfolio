// src/components/ChatWidget/ChatWidget.jsx
import { useState, useEffect, useRef } from "react";
import "./ChatWidget.css";
import { FaComments, FaTimes, FaPaperPlane, FaUser, FaRobot } from "react-icons/fa";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! 👋 I'm Abhishek's virtual assistant. How can I help you today?",
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add user message
      const userMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, userMessage]);

      // Add bot response after a short delay
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Thanks for your message! I'll redirect you to email for a direct response. 📧",
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botResponse]);

        // Open email client after showing response
        setTimeout(() => {
          window.location.href = `mailto:abhi993575@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(message)}`;
        }, 1000);
      }, 1000);

      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="avatar">
                <FaRobot />
              </div>
              <div className="header-text">
                <h4>Abhishek's Assistant</h4>
                <span className="status">
                  <span className="status-dot"></span>
                  Online
                </span>
              </div>
            </div>
            <button onClick={toggleChat} className="close-btn">
              <FaTimes />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                <div className="message-avatar">
                  {msg.sender === 'bot' ? <FaRobot /> : <FaUser />}
                </div>
                <div className="message-content">
                  <div className="message-bubble">
                    <p>{msg.text}</p>
                  </div>
                  <span className="message-time">{msg.time}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <div className="input-container">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                className="send-btn"
                onClick={handleSendMessage}
                disabled={!message.trim()}
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}

      <button className="chat-toggle" onClick={toggleChat}>
        {isOpen ? <FaTimes /> : <FaComments />}
        {!isOpen && <span className="chat-notification">💬</span>}
      </button>
    </div>
  );
};

export default ChatWidget;
