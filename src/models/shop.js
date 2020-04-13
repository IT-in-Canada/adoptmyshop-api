const mongoose = require('mongoose');

const shopSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
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
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
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
        required: true
    },
    images:{
        type: Array,
        default: []
    },
    support_sales_options:[{
        type: { 
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    }]
}, 
{ timestamps: true });

module.exports = mongoose.model('Shop', shopSchema);