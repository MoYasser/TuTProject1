const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportsSchema = new Schema({
    country: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    confirmed: {
        type: String,
        required: true
    },
    recovered: {
        type: String,
        required: true
    },
    critical: {
        type: String,
        required: true
    },
    deaths: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Reports = mongoose.model('Report', reportsSchema);
module.exports = Reports;