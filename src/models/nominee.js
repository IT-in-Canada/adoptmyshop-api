const mongoose = require('mongoose');

const nomineeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: false
    },
    city:{
        type: String,
        required: true
    },
    province:{
        type: String,
        required: true
    },
    zip_code:{
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    email:{
        type: String,
        lowercase: true,
        trim: true,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    tags:{
        type: Array, 
        default: [] 
    },
    active: {
        type: Boolean,
        default: true
    },
    featured_image: {
        type: String,
        required: false
    },
    images:{
        type: Array,
        default: []
    },
    support_options:[{
        type: { 
            type: String,
            required: false
        },
        link: {
            type: String,
            required: false
        }
    }]
}, 
{ timestamps: true });

module.exports = mongoose.model('Nominee', nomineeSchema);