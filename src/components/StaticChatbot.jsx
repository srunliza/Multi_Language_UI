"use client"
import React, { useState } from "react";

const StaticChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const staticResponses = {
    "hello": "Hi there! How can I help you today?",
    "how are you": "I'm a static bot, so I'm always the same!",
    "what is your name": "I'm StaticBot, your friendly assistant.",
    "bye": "Goodbye! Have a great day!"
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    const response = staticResponses[input.toLowerCase()] || "I'm not sure how to respond to that.";
    const botMessage = { sender: "bot", text: response };

    setMessages((prevMessages) => [...prevMessages, botMessage]);
    setInput("");
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default StaticChatbot;
