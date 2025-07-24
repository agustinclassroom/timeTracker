const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
    entry: {
        type: String,
        required: true
    }
}, { timestamps: true})

const Log = mongoose.model("timeLog", logSchema);
module.exports = Log;