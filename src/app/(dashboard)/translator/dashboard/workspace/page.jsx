"use client";

import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { useRouter } from "next/navigation";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import { Popover } from "flowbite-react";
import Image from "next/image";
import HintPopupComponent from "../../_components/HintPopupComponent";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FeedbackTranslatorComponent from "../../../translator/_components/FeedbackTranslatorCompoent";
import chatBotImage from '../../../../../../public/assets/icons/sreyly.svg'
import userImage from '../../../../../../public/assets/icons/vandy.png'
import { resolve } from "styled-jsx/css";
import LoadingChatbotPage from "@/app/LoadingChatbot";



const TranslatorWorkSpace = () => {
  
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [chat, setChat] = useState(null);
  const [theme, setTheme] = useState("light");
  const [error, setError] = useState(null);


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
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  ];

  useEffect(() => {
    const initChat = async () => {
      try {
        const newChat = await genAI.getGenerativeModel({ model: MODEL_NAME }).startChat({
          generationConfig,
          safetySettings,
          history: messages.map((msg) => ({ text: msg.text, role: msg.role })),
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
          text: await result.response.text(), // Ensure the method exists and works correctly
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

  const translations = [
    { id: 1, english: "Home" },
    { id: 2, english: "About" },
    { id: 3, english: "Contact" },
    { id: 4, english: "Services" },
    { id: 5, english: "Products" },
    { id: 6, english: "Blog" },
    { id: 7, english: "Careers" },
    { id: 8, english: "Support" },
    { id: 9, english: "Privacy" },
    { id: 10, english: "Terms" },
    { id: 11, english: "Login" },
    { id: 12, english: "Register" },
  ];

  const router = useRouter();

  const [koreanTranslations, setKoreanTranslations] = useState(
    translations.reduce((acc, item) => {
      acc[item.id] = "";
      return acc;
    }, {})
  );

  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current.length > 0) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleInputChange = (id, value) => {
    setKoreanTranslations({
      ...koreanTranslations,
      [id]: value,
    });
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const nextIndex = index + 1;
      if (nextIndex < inputRefs.current.length) {
        inputRefs.current[nextIndex].focus();
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = index - 1;
      if (prevIndex >= 0) {
        inputRefs.current[prevIndex].focus();
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = index + 1;
      if (nextIndex < inputRefs.current.length) {
        inputRefs.current[nextIndex].focus();
      }
    }
  };

  const handleSubmit = () => {
    console.log("Submitted translations:", koreanTranslations);
    router.push("/translator/dashboard");
  };

  const handleSave = () => {
    console.log("Saved translations:", koreanTranslations);
    router.push("/translator/dashboard");
  };

  const handleCloseAndExit = () => {
    router.push("/translator/dashboard");
  };

  const handleNoAction = (modalId) => {
    document.getElementById(modalId).close();
  };

  const handleUserMessageSend = () => {
    if (userMessage.trim() !== "") {
      setMessages([
        ...messages,
        { sender: "user", text: userMessage },
        { sender: "ai", text: "hello" },
      ]);
      setUserMessage("");
    }
  };

  return (
    <div className="container mx-auto px-10">
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <div className="flex h-full px-3 justify-between items-center">
            <h1 className="gap-5 text-gray-800 text-xl font-semibold">Web Design</h1>
            <button onClick={() => document.getElementById("modal_close").showModal()}>
              <CloseOutlinedIcon />
            </button>
            <dialog id="modal_close" className="modal">
              <div className="modal-box w-96">
                <p className="py-4 text-xl text-center">Do you want to Save or Not?</p>
                <div className="modal-action">
                  <form method="dialog" className="flex m-auto gap-5">
                    <button
                      className="text-blue-700 bg-white border hover:text-white border-blue-600 hover:bg-blue-600 shadow-sm focus:ring-blue-300 font-medium rounded-lg text-sm py-[10px] w-[90px] px-4"
                      onClick={() => handleNoAction("modal_close")}
                    >
                      No
                    </button>
                    <button
                      className="bg-blue-600 hover:bg-blue-800 shadow-sm focus:ring-2 focus:ring-blue-400 font-medium rounded-lg text-sm py-[10px] w-[90px] px-4 text-white"
                      onClick={handleSave}
                    >
                      Yes
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>

        <div className="col-span-4">
          <HintPopupComponent />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-8">
          <div className="rounded-xl bg-white border pb-3 overflow-hidden shadow-md">
            <div className="flex bg-[#dbebfe] font-semibold text-gray-800 p-3 justify-evenly items-center">
              <h3>English</h3>
              <SwapHorizOutlinedIcon />
              <h3>Korean</h3>
            </div>
            <div className="max-h-[460px] no-scrollbar overflow-auto">
              <table className="min-w-full bg-white border-6">
                <tbody>
                  {translations.map((item, index) => (
                    <tr key={item.id}>
                      <td className="py-2 px-6 border-b border-r w-[50%]">{item.english}</td>
                      <td className="border-b w-[50%]">
                        <input
                          type="text"
                          ref={(el) => (inputRefs.current[index] = el)}
                          className="border-0 focus:ring-1 placeholder:whitespace-tracking-wide transition ring-blue-600 h-full placeholder:text-gray-400 w-full px-2 placeholder:text-xs py-2"
                          placeholder="translate here"
                          value={koreanTranslations[item.id]}
                          onChange={(e) => handleInputChange(item.id, e.target.value)}
                          onFocus={(e) => (e.target.placeholder = "")}
                          onBlur={(e) => (e.target.placeholder = "translate here")}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex gap-4 mt-4 justify-end">
            <button
              className="bg-blue-600 hover:bg-blue-800 shadow-sm focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-[10px] w-[90px] px-4 text-white"
              onClick={() => document.getElementById("modal_save").showModal()}
            >
              Save
            </button>
            <dialog id="modal_save" className="modal">
              <div className="modal-box w-96">
                <p className="py-4 text-xl text-center">Do you want to save this translation?</p>
                <div className="modal-action">
                  <form method="dialog" className="flex m-auto gap-5">
                    <button
                      className="text-blue-700 bg-white border hover:text-white border-blue-600 hover:bg-blue-600 shadow-sm focus:ring-blue-300 font-medium rounded-lg text-sm py-[10px] w-[90px] px-4"
                      onClick={() => handleNoAction("modal_save")}
                    >
                      No
                    </button>
                    <button
                      className="bg-blue-600 hover:bg-blue-800 shadow-sm focus:ring-2 focus:ring-blue-400 font-medium rounded-lg text-sm py-[10px] w-[90px] px-4 text-white"
                      onClick={handleSave}
                    >
                      Yes
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
            <button
              className="bg-green-600 hover:bg-green-800 shadow-sm focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm py-[10px] w-[90px] px-5 text-white"
              onClick={() => document.getElementById("modal_submit").showModal()}
            >
              Submit
            </button>
            <dialog id="modal_submit" className="modal">
              <div className="modal-box w-96">
                <p className="py-4 text-xl text-center">Do you want to submit this translation?</p>
                <div className="modal-action">
                  <form method="dialog" className="flex m-auto gap-5">
                    <button
                      className="text-blue-700 bg-white border hover:text-white border-blue-600 hover:bg-blue-600 shadow-sm focus:ring-blue-300 font-medium rounded-lg text-sm py-[10px] w-[90px] px-4"
                      onClick={() => handleNoAction("modal_submit")}
                    >
                      No
                    </button>
                    <button
                      className="bg-blue-600 hover:bg-blue-800 shadow-sm focus:ring-2 focus:ring-blue-400 font-medium rounded-lg text-sm py-[10px] w-[90px] px-4 text-white"
                      onClick={handleSubmit}
                    >
                      Yes
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>

        <div className="col-span-4 flex flex-col items-end">
          <FeedbackTranslatorComponent />
          <div>

            <Popover
              placement="top-start"
              aria-labelledby="default-popover"
              content={
                <div className="w-[360px] text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex justify-between items-center border-b border-gray-200 bg-gray-100 px-3 py-2">
                    <div tabIndex={0} className="flex items-center gap-2">
                      <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content rounded-full w-8">
                          <span className="text-xs">
                            <img src="/assets/icons/chatboot.svg" alt="chatboot" />
                          </span>
                        </div>
                      </div>
                      <h3 id="default-popover" className="font-semibold text-gray-900 dark:text-white">
                        Support Bot
                      </h3>
                    </div>
                    <div>
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                      </svg>
                    </div>
                  </div>

                        
                  {/* ai chat generator */}
                  <div className={`p-5 ${secondary} flex-1 overflow-auto h-[410px]`}>
                    {messages.map((msg, index) => (
                      <div key={index} className={`mb-4 flex ${msg.role === "user" ? "justify-end" : "justify-start"} items-start`}>

                        {/* ai role */}
                        {msg.role === "bot" && (

                          <Image 
                          src={chatBotImage} 
                          width={40} 
                          height={40} 
                          alt="chat bot image" 
                          className="w-8 h-8 rounded-full mr-2"/>
                        
                        )
                        }

                        <div className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}>
                          <span className={`inline-block p-2 rounded-lg ${msg.role === "user" ? `${accent} text-white` : `${primary} ${text} border border-gray-300`}`}>
                            {msg.text}
                          </span>
                          <p className={`text-xs ${text} mt-1`}>
                            {msg.role === "bot" ? "Bot" : "You"} - {msg.timestamp.toLocaleTimeString()}
                          </p>
                        </div>

                        {/* user role */}
                        {msg.role === "user" && (

                          <Image 
                          src={userImage} 
                          width={50} 
                          height={45} 
                          alt="user image"
                          className="w-8 h-8 rounded-full ml-2"/>
                      
                        )}
                      </div>
                    ))}
                  </div>


                  {/* {error && <div className="text-red-500 text-sm mb-4">{error}</div>} */}


                  <div className="input-area flex items-center pb-2 p-1">
                    {/* input text to ask ai */}
                    <input
                      type="text"
                      placeholder="Type your message..."
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyDown={handleKeyPress}
                      className={`flex-1 p-2 border text-gray-600 rounded-l-lg placeholder:text-gray-400 placeholder:text-sm focus:outline-none ${`border-${accent}`}`}
                      />

                    {/* button send to ai */}
                    <button
                      onClick={handleSendMessage}
                      className={`bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-800 ${accent}`}
                    >
                      Send
                    </button>

                  </div>
                </div>
              }
            >
              <Image src={"/assets/icons/chatboot.svg"} alt="chatboot" width={100} height={100} />
            </Popover>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TranslatorWorkSpace;
