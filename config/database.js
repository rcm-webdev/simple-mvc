//create a function to connect to our database
const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB_STRING, {});
        console.log(`MonogoDB Connected: ${conn.connection.host}`)
    } catch (err){
        console.log(err);
        //exit with failure
        process.exit(1);
        }
}

module.exports = connectDB;