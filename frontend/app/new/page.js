"use client";

import { ChatInput } from "@/components/chat/chat-input";

const New = () => {
  const handleSubmit = (prompt) => {
    console.log("Submitted prompt:", prompt);
  };

  return (
    <div className="container mx-auto max-w-2xl p-4">
      <h1 className="text-2xl font-bold mb-4">Chat with WellBeing AI</h1>
      <ChatInput onSubmit={handleSubmit} />
    </div>
  );
};

export default New;
