const express = require("express");
const dotenv = require("dotenv");

const connectTomongoDB = require("./db/connectTomongodb");

const authRoutes = require("./routes/auth.routes");
const messageRoutes = require("./routes/message.routes");
const userRoutes = require("./routes/user.routes");

const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// MIDDLEWARE
app.use(express.json()); // this is neede to read the data from body , to parse the incoming requests with JSON paylaod
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Server is working!");
});

app.use("/api/auth/", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectTomongoDB();
  console.log(`server is running at prot ${PORT}`);
});
