const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// MIDDLEWARES
app.use(cors());
app.use(express.json());

//MongoDB Atlas connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const coffeesRouter = require("./routes/coffees");
app.use("/coffees", coffeesRouter);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
