// require mongoose package
const mongoose = require('mongoose')

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
    hunters: {
            type: Array,
            required: true,
     },
    captured: {
        type: Boolean,
        //can add a default if nothing added
        default: false
    }
})

//build model from the schema or export the schema

module.exports = BountieSchema