var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recoSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    dish: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('recommendation', recoSchema);