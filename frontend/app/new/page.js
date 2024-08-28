"use client";

import { useState } from "react";

import { ChatInput } from "@/components/chat/chat-input";
import { sendChatMessage } from "@/lib/api/chatApi";

const New = () => {
  const [messages, setMessages] = useState([]);
  const handleSubmit = async (prompt) => {
    console.log("Submitted prompt:", prompt);
    try {
      const response = await sendChatMessage(prompt);
      console.log(response);
      setMessages((prevMessages) => [
        { type: "user", content: prompt },
        { type: "ai", content: response.data },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="container mx-auto max-w-2xl p-4">
      <h1 className="text-2xl font-bold mb-4">Chat with WellBeing AI</h1>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`mb-2 ${
            message.type === "user" ? "text-right" : "text-left"
          }`}
        >
          {message.content}
        </div>
      ))}
      <ChatInput onSubmit={handleSubmit} />
    </div>
  );
};

export default New;
