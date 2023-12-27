const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "name is required"],
            unique:true
        }
    },
    { timestamps: true, versionKey:false}
)


const AccountModel = mongoose.model("accounts", AccountSchema);

module.exports = AccountModel