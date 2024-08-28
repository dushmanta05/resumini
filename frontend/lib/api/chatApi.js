const chatUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/chat`;

export async function sendChatMessage(prompt) {
  console.log("Hello");
  console.log(JSON.stringify({ prompt }));
  const response = await fetch(chatUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }
  console.log(response);
  return response.json();
}
