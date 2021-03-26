// 1 - require express
const express = require("express");
//2 - instance of express
const app = express();
//5 - require dotenv and configure
require(`dotenv`).config({ path: ".env" });
//6- connect to db
const connectDB = require("./config/connectDB");
connectDB();

//7-Routes
app.use("api/contact", require("./routes/contact"));

//3 - port
const PORT = process.env.PORT;

//4 - create server
app.listen(PORT, (error) =>
  error
    ? console.log(error)
    : console.log(`server is running in port ${PORT}.....`)
);
