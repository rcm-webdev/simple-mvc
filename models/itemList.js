//building a schema/blueprint to send to the database
const mongoose = require("mongoose");

const itemList = new mongoose.Schema({
    titleInput:{
        type: String,
        required: true,
    },
    numberInput:{
        type: Number,
        required: true,
    },

    //mongoose allows us to create a default value for this field
    date:{
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("itemList", itemList);