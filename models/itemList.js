//building a schema/blueprint to send to the database
const mongoose = require("mongoose");

const itemListSchema = new mongoose.Schema({
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

//export mongoose model with the name of ItemList and the schema of itemListSchema and the collection of items
module.exports = mongoose.model("ItemList", itemListSchema, "items");