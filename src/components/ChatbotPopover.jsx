"use client";

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { useState, useEffect } from "react";
import Image from "next/image";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import user from "../../public/assets/icons/Vandy.png";
import Avatar from "@mui/material/Avatar";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const ChatbotPopover = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [chat, setChat] = useState(null);
  const [theme, setTheme] = useState("light");
  const [error, setError] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleNewMessage = async (message) => {
    setLoading(true);
    // Simulate sending message and waiting for AI response
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  const API_KEY = "AIzaSyDjr_GaiM86TzUEty7Ey-HkghaHZjbLNHU";
  const MODEL_NAME = "gemini-1.0-pro-001";

  const genAI = new GoogleGenerativeAI(API_KEY);

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
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

  useEffect(() => {
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
    setLoading(true);
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
          text: await result.response.text(), // Ensure the method exists and works correctly
          role: "bot",
          timestamp: new Date(),
        };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
        console.log("Response: ", result);
      }
    } catch (error) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
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
    <div className="relative pr-10">
      <div className="flex justify-end items-end">
        <IconButton aria-describedby={id} onClick={handleClick}>
          <img
            alt="Support Bot"
            src="/assets/images/chatboot.svg"
            className="w-24"
          />
        </IconButton>
      </div>
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
        <div className="w-[437px] h-[617px] rounded-2xl">
          <div className="flex justify-between bg-blue-700 items-center p-2">
            <div className="flex items-center">
              <Avatar
                alt="Support Bot"
                src="/assets/images/chatboot.svg"
                className=""
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

          {/* mapping ai chat */}
          <div className="flex flex-col h-[502px] overflow-y-auto w-full p-2 no-scrollbar">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                } items-start mt-3`}
              >
                {/* AI role */}
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

                {/* User role */}
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
                <div class="flex animate-pulse">
                  <div class="ms-4 mt-2 w-full">
                    <p class="h-2 bg-gray-200 rounded-full dark:bg-neutral-700 w-60"></p>

                    <ul class="mt-2 space-y-3">
                      <li class="w-full h-2 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
                      <li class="w-full h-1.5 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
                      {/* <li class="w-full h-1 bg-gray-200 rounded-full dark:bg-neutral-700"></li> */}
                      <p className="text-xs">Bot is typing...</p>
                    </ul>
                  </div>
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
