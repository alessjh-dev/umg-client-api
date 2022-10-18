const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema(
    {
        name: {
            type: String,

        },
        birthday: {
            type: Date,
        },
        gender: {
            type: String,
        },
        dpi: {
            type: Number,
        },
        address: {
            type: String,
        },
        nit: {
            type: Number,
        },
        phone: {
            type: Number,
        }
    },
    {
        timestamps: true, //TODO createdAt, uppdatedAt
        versionKey: false
    }
);

module.exports = mongoose.model("Client", ClientSchema);