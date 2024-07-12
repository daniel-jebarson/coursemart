const cors = require("cors");
const colors = require("colors");
const connectDB = require("./config/db");
const express = require("express");
const logHandler = require("./middleware/logs/log");
require("dotenv").config();
const NotFound = require("./middleware/handler/404");
const errorHandler = require("./middleware/handler/errorHandler");

const userRoutes = require("./routes/user");
const courseRoutes = require("./routes/course");

const app = express();
app.use(cors());
app.use(express.json());
app.use(logHandler);

app.use("/user", userRoutes);
app.use("/course", courseRoutes);

app.use(errorHandler);
app.use(NotFound);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    const con = await connectDB();
    console.log(`MongoDB connected: ${con.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`${error}`.red.bold);
    process.exit();
  }
};

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

start();

const server = app.listen(port, () =>
  console.log(`Server is listening on port ${port}...`.green.bold)
);

const handleTermination = () => {
  console.log("Closing server...".cyan.bold);
  server.close(() => {
    console.log("Server closed".red.underline);
    process.exit(0); // Exit the process once server is closed
  });
};

// Handle termination signals
process.on("SIGINT", handleTermination); // Ctrl+C in terminal
process.on("SIGTERM", handleTermination); // Termination signal
