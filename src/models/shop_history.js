const mongoose = require('mongoose');

const shopsHistorySchema = mongoose.Schema({
    shop: Schema.Types.Mixed
});

module.exports = mongoose.model('ShopsHistory', shopsHistorySchema);