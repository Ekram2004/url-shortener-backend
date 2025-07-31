// server.js
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Connect to database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define routes
app.use("/", require('./routes/urlRoutes'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
