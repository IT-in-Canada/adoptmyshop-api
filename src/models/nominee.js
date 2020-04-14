const mongoose = require('mongoose');

const nomineeSchema = mongoose.Schema({
    business_name:{
        type:   String,
        required:   true
    },
    business_url:{
        type: String,
        required: false
    },
    business_description:{
        type: String,
        required: false
    },
    nominator_name: {
        type: String,
        required: false
    },
    nominator_email:{
        type: String,
        lowercase: true,
        trim: true,
        required: false
    },
    nominator_facebook_url:{
        type: String,
        required:false
    },
    nominator_twitter_url:{
        type: String,
        required: false
    },
    nominator_instagram_url:{
        type: String,
        required: false
    },
    nominator_linkedin_url:{
        type: String,
        required: false
    },
    adopt_my_shop_listing_url:{
        type: String,
        required: false
    },
    business_address:{
        type: String,
        required: false
    },
    business_city:{
        type: String,
        required: false
    },
    business_province:{
        type: String,
        required: false
    },
    business_zip_code:{
        type: String,
        required: false
    },
    business_country: {
        type: String,
        required: false
    },
    business_phone: {
        type: String,
        required: false
    },
    tags:{
        type: Array, 
        default: [] 
    },
    products_offered:{
        type: Array,
        required: false
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
    mention:{
        type: String,
        required: false
    },
    not_mention:{
        type: String,
        required: false
    },
    reference_materials:[{
        type: { 
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    }],
    story_features_link:[{
        type: { 
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    }],
    social_posts:[{
        key_messaging:{
            type: String,
            required: false
        },
        additional_campaign_materials:{
            type: String,
            required: false
        }
    }],
    featured_image: {
        type: String,
        required: true
    },
    images:{
        type: Array,
        default: []
    },
    can_use_images: {
        type: Boolean,
        default: true
    },
    support_language:[{
        language:{
            type: String,
            required: false
        }
    }],
    validation_history:{
        type: String,
        required: false
    }
},
{ timestamps: true });

module.exports = mongoose.model('Nominee', nomineeSchema);