const express = require("express");
const connectDB = require("./config/connectDB");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDB();
const app = express();
const port = 3000 || process.env.PORT;

// middleware & routes
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server connected on port: ${port}`));