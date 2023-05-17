import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import path from "path";
import cors from "cors";

const app = express();
const httpServer = createServer(app);
const port = 3003;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

let data = {
  blue: 0,
  orange: 0,
};

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    data = { blue: 0, orange: 0 };
  });
});

app.post("/click", (req, res) => {
  const input = req.body;

  if (input.color === "blue") {
    data.blue++;
  } else if (input.color === "orange") {
    data.orange++;
  }

  setTimeout(() => {
    const response = [
      {
        name: "Orange",
        oc: data.orange,
      },
      {
        name: "Blue",
        bc: data.blue,
      },
    ];

    io.emit("chart", response);
  }, 5000);
  res.send("200 OK");
});

app.get("/check", (req, res) => {
  res.send(data);
});

httpServer.listen(port, () => {
  console.log("Listen in port", port);
});
