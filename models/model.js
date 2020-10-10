const mongoose = require('mongoose');

const dataUser = new mongoose.Schema({
    nama: {
        required: true,
        type: String
    },
    email: {
        require: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('datausers',dataUser);
