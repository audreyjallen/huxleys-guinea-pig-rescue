//  Schema for individual guinea pig objects

const mongoose = require('mongoose');

const GuineaPigSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    age: {
        type: String,
        required: true,
    },

    sex: {
        type: String,
        enum: ['Male', 'Female'],
        required: true,
    },

    healthConditions: {
        type: String,
        default: 'N/A',
    },

    description: {
        type: String,
        required: true,
    },

    adoptionStatus: {
        type: String,
        enum: ['Available', 'Pending', 'Adopted'],
        default: 'Available',
    },

    imageUrls: {
        type: [String],
        default: [],
    },

});

module.exports = mongoose.model('GuineaPig', GuineaPigSchema);