import path from "path";
import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { app, server } from "./sockets/socket.js";
config();

// file imports
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import MONGODB_CONNECTION from "./database/mongodb.js";

// const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// middleware
app.use(express.json());
app.use(cookieParser()); // to parse the incoming cookies from req.cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.get("/test", (req, res) => {
  res.status(200).json("local server running here😊");
});

// server.listen(PORT, () => {
//   console.log(`server is running on port ${PORT}`);
//   MONGODB_CONNECTION();
// });

// connection
mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() => {
    console.log("connected to database");
    server.listen(5000, () => {
      console.log("server is running on port 5000");
    });
  })
  .catch((error) => {
    console.log(`connection failed: ${error}`);
  });
