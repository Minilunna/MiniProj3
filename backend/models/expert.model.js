const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const expertSchema = new Schema({
    name: String,
    birth_date: Date,
    group: {
        type: String,
        enum: ['anfibio', 'ave', 'mamifero', 'peixe', 'reptil']
    },
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

module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.expert, expertSchema);