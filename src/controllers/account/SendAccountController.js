const SendAccountModel = require("../../models/account/SendAccountModel");

const DeleteService = require("../../services/common/DeleteService");
const DetailsByIDService = require("../../services/common/DetailsService");
const GetAllService = require("../../services/common/GetAllService");
const AccountCreateService = require("../../services/account/AccountCreateService");
const AccountUpdateService = require("../../services/account/AccountUpdateService");
const DetailsService = require("../../services/common/DetailsService");


exports.CreateSendAccount=async (req, res) => {
    await AccountCreateService(req,res,SendAccountModel);
}

// exports.UpdateAccount=async(req,res)=>{
//     await AccountUpdateService(req,res,AccountModel)
// }
//
// exports.DeleteAccount=async(req,res)=>{
//     await DeleteService(req, res, AccountModel)
// }
//
exports.GetSendAccount=async (req, res) => {
    await DetailsService(req, res, SendAccountModel);
}

exports.GetAllSendAccount=async(req,res)=>{
    let Projection = {$project:{_id:1, name:1}};
    await GetAllService(req, res, SendAccountModel,Projection)
}
