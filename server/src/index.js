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
const instituteRoutes = require("./routes/institute");
const emailRoutes = require("./routes/verify");
const facultyRoutes = require("./routes/faculty");

const app = express();
app.use(cors());
app.use(express.json());
app.use(logHandler);

app.use("/user", userRoutes);
app.use("/course", courseRoutes);
app.use("/institute", instituteRoutes);
app.use("/email", emailRoutes);
app.use("/faculty", facultyRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

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
