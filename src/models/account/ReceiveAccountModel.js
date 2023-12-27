const mongoose = require("mongoose");

const ReceiveAccountSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "name is required"],
            unique:true
        }
    },
    { timestamps: true, versionKey:false}
)


const ReceiveAccountModel = mongoose.model("receiveAccounts", ReceiveAccountSchema);

module.exports = ReceiveAccountModel