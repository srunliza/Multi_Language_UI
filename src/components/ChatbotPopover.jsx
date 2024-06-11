import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from '@mui/material/Avatar';

const ChatbotPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input, avatar: "/path/to/user/avatar.png" }]);
      setInput("");
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "This is a response from the chatbot.", avatar: "/assets/images/chatboot.svg" },
        ]);
      }, 1000);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "chatbot-popover" : undefined;

  return (
    <div className="relative">
      <IconButton aria-describedby={id} onClick={handleClick}>
        <ChatIcon style={{ fontSize: 50 }} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        disableEnforceFocus
        disableAutoFocus
        disableRestoreFocus
        PaperProps={{
          onMouseDown: (event) => {
            event.stopPropagation();
          },
        }}
      >
        <div className=" w-[400px] rounded-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="flex text-lg font-semibold text-gray-800">
              <Avatar alt="Support Bot" src="/assets/images/chatboot.svg" className=""/>
              Support Bot
            </h2>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex flex-col h-64 w-[400px] overflow-y-auto border ">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-2 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div className="flex items-end ">
                  {msg.sender === "bot" && (
                    <Avatar alt="Support Bot" src={msg.avatar} className="mr-2"/>
                  )}
                  <div
                    className={`p-2 rounded ${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === "user" && (
                    <Avatar alt="User" src={msg.avatar} className="ml-2"/>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex rounded-2xl">
            <input
              type="text"
              className="flex-1 p-2 border rounded-l-lg focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-800"
            >
              Send
            </button>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default ChatbotPopover;
