const mongoose = require("mongoose");

const RateSchema = new mongoose.Schema(
    {
        accounts: [
            { type: mongoose.Schema.Types.ObjectId}
        ],
        unit: {
            type:String
        },
        current: {
            type:String
        }
    },

    { timestamps: true, versionKey:false}
)


const RateModel = mongoose.model("rate", RateSchema);

module.exports = RateModel