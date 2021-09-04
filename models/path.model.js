const mongoose = require("mongoose");

const pathSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Resources: {
        type: Array,
        required: true,
        default: ['https://www.google.com']
    },
    author: {
        type: String,
        required: true
    },
    isPublic: {
        type: Boolean,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("Paths", pathSchema);