const mongoose = require("mongoose");

const SendAccountSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "name is required"],
            unique:true
        }
    },
    { timestamps: true, versionKey:false}
)


const SendAccountModel = mongoose.model("sendAccounts", SendAccountSchema);

module.exports = SendAccountModel