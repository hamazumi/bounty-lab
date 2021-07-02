// require mongoose package
const mongoose = require('mongoose')

let hunterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    }
})

//define mongoose schema
const BountieSchema = new mongoose.Schema({
    name: {
        type: String,
        //Default is false but you can add required if you need it
        required: true
    },
    wantedFor : {
        type: String
    },
    client : {
        type: String,
        //can add min/max of the string entered
        minlength: 2,
        maxlength: 100
    },
    reward : {
        type: Number,
        //can add a default if nothing added
        default: 1
    },
    ship: {
        type: String
    },
    hunters: [hunterSchema],
    captured: {
        type: Boolean,
        //can add a default if nothing added
        default: false
    }
})

//build model from the schema or export the schema

module.exports = BountieSchema