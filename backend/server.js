const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

console.log("AI Surgical Server Running...");

io.on("connection", (socket) => {

  console.log("Dashboard Connected");

  setInterval(() => {

    socket.emit("patientVitals", {

      heartRate:
        70 + Math.floor(Math.random() * 20),

      oxygen:
        95 + Math.floor(Math.random() * 5),

      temperature:
        (36 + Math.random()).toFixed(1),

      bloodPressure:
        `${110 + Math.floor(Math.random() * 20)}/${70 + Math.floor(Math.random() * 10)}`,

      ecg: Array.from(
        { length: 40 },
        () => Math.floor(Math.random() * 100)
      ),

    });

  }, 2000);

  socket.on("disconnect", () => {
    console.log("Disconnected");
  });

});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});