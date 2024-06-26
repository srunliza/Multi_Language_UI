"use client";
import user from "../../public/assets/icons/Vandy.png";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { useState, useEffect } from "react";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import TranslateIcon from "@mui/icons-material/Translate";
import Avatar from "@mui/material/Avatar";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const iconStyle = {
  fontSize: 70,
  color: "white",
  marginTop: "20px",
  background: "linear-gradient(90deg, blue, purple)",
  borderRadius: "50%",
  padding: "10px",
  animation: `${rotate} 2s linear infinite`,
};

const ChatbotPopover = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [chat, setChat] = useState(null);
  const [theme, setTheme] = useState("light");
  const [error, setError] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "AIzaSyDjr_GaiM86TzUEty7Ey-HkghaHZjbLNHU";
  const MODEL_NAME = "gemini-1.0-pro-001";

  useEffect(() => {
    const genAI = new GoogleGenerativeAI(API_KEY);

    const generationConfig = {
      temperature: 0.7,
      topK: 5,
      topP: 0.9,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const initChat = async () => {
      try {
        const newChat = await genAI
          .getGenerativeModel({ model: MODEL_NAME })
          .startChat({
            generationConfig,
            safetySettings,
            history: messages.map((msg) => ({
              text: msg.text,
              role: msg.role,
            })),
          });
        setChat(newChat);
      } catch (err) {
        setError("Failed to initialize chat. Please try again.");
      }
    };

    initChat();
  }, [messages]);

  const handleSendMessage = async () => {
    try {
      const userMessage = {
        text: userInput,
        role: "user",
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setUserInput("");

      if (chat) {
        const result = await chat.sendMessage(userInput);
        const botMessage = {
          text: await result.response.text(),
          role: "bot",
          timestamp: new Date(),
        };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
        console.log("Response: ", result);
      }
    } catch (error) {
      setError("Failed to send message. Please try again.");
    }
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const getThemeColors = () => {
    switch (theme) {
      case "light":
        return {
          primary: "bg-white",
          secondary: "bg-gray-100",
          accent: "bg-blue-700",
          text: "text-gray-800",
        };
      case "dark":
        return {
          primary: "bg-gray-900",
          secondary: "bg-gray-800",
          accent: "bg-yellow-100",
          text: "text-gray-100",
        };
      default:
        return {
          primary: "bg-white",
          secondary: "bg-gray-100",
          accent: "bg-blue-500",
          text: "text-gray-800",
        };
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const { primary, secondary, accent, text } = getThemeColors();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSend = () => {
    if (userInput.trim()) {
      handleSendMessage();
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "chatbot-popover" : undefined;

  return (
    <div className="relative">
      <Image
        src="/assets/images/chatboot.svg"
        width={40}
        height={40}
        alt="chat bot image"
        className="w-[6rem] h-[6rem] rounded-full mr-2"
        aria-describedby={id}
        onClick={handleClick}
      />
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
        <div className="w-[420px] h-[540px] rounded-2xl">
          <div className="flex justify-between bg-blue-700 items-center p-2">
            <div className="flex items-center">
              <Avatar
                alt="Translation Assistant"
                src="/assets/images/chatboot.svg"
                className="mr-2"
              />
              <h2 className="text-lg font-semibold text-white">Support Bot</h2>
            </div>
            <IconButton onClick={handleClose}>
              <HorizontalRuleIcon
                style={{ color: "white" }}
                fontSize="medium"
              />
            </IconButton>
          </div>

          <div className="flex flex-col h-[425px] overflow-y-auto w-full p-2 no-scrollbar">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                } items-start mt-3`}
              >
                {msg.role === "bot" && (
                  <Image
                    src="/assets/images/chatboot.svg"
                    width={40}
                    height={40}
                    alt="chat bot image"
                    className="w-10 h-10 rounded-full mr-2"
                  />
                )}

                <div
                  className={`flex flex-col ${
                    msg.role === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      msg.role === "user"
                        ? `${accent} text-white text-sm`
                        : `${primary} ${text} border text-sm border-gray-300`
                    }`}
                  >
                    {msg.text}
                  </span>
                  <p className={`text-xs ${text} mt-1`}>
                    {msg.role === "bot" ? "Bot" : "You"} -{" "}
                    {msg.timestamp.toLocaleTimeString()}
                  </p>
                </div>

                {msg.role === "user" && (
                  <Image
                    src={user}
                    width={45}
                    height={45}
                    alt="user image"
                    className="w-8 h-8 rounded-full ml-2"
                  />
                )}
              </div>
            ))}

            {loading && (
              <div className="mb-4 flex justify-start items-start mt-3">
                <Image
                  src="/assets/images/chatboot.svg"
                  width={40}
                  height={40}
                  alt="chat bot image"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div className="flex flex-col items-start">
                  <div className="inline-block p-2 rounded-lg border border-gray-300 bg-gray-200 animate-pulse w-48 h-10"></div>
                  <p className="text-xs text-gray-400 mt-1">Bot is typing...</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex rounded-2xl p-1">
            <input
              type="text"
              className="flex-1 p-2 border rounded-l-lg focus:outline-none placeholder:text-sm"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Your type here..."
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
