const mongoose = require('mongoose');

const shopSchema = mongoose.Schema({
    business_name: {
        type: String,
        required: true
    },
    business_address:{
        type: String,
        required: true
    },
    business_city:{
        type: String,
        required: true
    },
    business_province:{
        type: String,
        required: true
    },
    business_zip_code:{
        type: String,
        required: true
    },
    business_country: {
        type: String,
        required: true
    },
    business_phone: {
        type: String,
        required: true
    },
    business_email: {
        type: String,
        required: true
    },
    business_description: {
        type: String,
        required: true
    },
    business_tags:{
        type: Array, 
        default: [] 
    },
    active: {
        type: Boolean,
        default: false
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
    }],
    nominee_id: {
        type: String,
        require: true
    }
}, 
{ timestamps: true });

module.exports = mongoose.model('Shop', shopSchema);