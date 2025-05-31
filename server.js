const express = require("express");
const app = express();
const mainRoutes = require("./routes/main")

//use dotenv
require("dotenv").config({ path: "./config/.env" });


//use EJS for views
app.set("view engine", "ejs");

app.use(express.static("public"))

//Body Parsing
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", mainRoutes);

app.listen(process.env.PORT, () => {console.log(`Server is running on port ${process.env.PORT}, you better catch it!`)})