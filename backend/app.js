import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ChatController from "./controllers/ChatController.js";

const app = express();
dotenv.config();

// Enable CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, (error) => {
  if (!error) console.log(`Server is running on port ${PORT}`);
  else console.log("Error occurred, server can't start", error);
});

app.post("/chat", ChatController);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});
