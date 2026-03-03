const express = require("express");
const cors = require("cors"); //CORS allows frontend (React) to talk to backend as it runs on diffrent ports.
const userRoutes = require("./routes/userRoutes"); //Import routes file

const app = express(); //This creates main Express app object.

app.use(cors()); // Without this:
// 1. The frontend (React) will not be able to make API calls to the backend (Express) because they run on different ports (e.g., React on 3000 and Express on 5000).
// 2. The browser will block the requests from the frontend to the backend due to CORS policy, resulting in errors in the browser console and failed API calls.
app.use(express.json()); // Allow backend to read JSON data from frontend

app.use("/api", userRoutes);

module.exports = app;
