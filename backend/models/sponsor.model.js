const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const sponsorSchema = new Schema({
    name: String,
    category: {
        type: String,
        enum: ['particular', 'empresa'],
    },
    nif: Number,
    animal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: CONFIG.mongodb.collections.animal,
        required: false
    },
    value: Number,
    photo: {
        type: mongoose.Schema.Types.Mixed,
        required: false
    },
    location: {
        address: String,
        country: String
    },
    contact: {
        email: String,
        phone: Number
    },

});

module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.sponsor, sponsorSchema);