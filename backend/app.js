import express from "express";
import dotenv from "dotenv";

import ChatController from "./controllers/ChatController.js";

const app = express();
dotenv.config();
const PORT = 3000;

app.listen(PORT, (error) => {
  if (!error) console.log(`Server is running on port ${PORT}`);
  else console.log("Error occurred, server can't start", error);
});

app.get("/", async (req, res) => {
  res.end("Hello, WellBeing AI!");
});

app.get("/chat", ChatController);
