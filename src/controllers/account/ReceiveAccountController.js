const ReceiveAccountModel = require("../../models/account/ReceiveAccountModel");

const DeleteService = require("../../services/common/DeleteService");
const DetailsByIDService = require("../../services/common/DetailsService");
const GetAllService = require("../../services/common/GetAllService");
const AccountCreateService = require("../../services/account/AccountCreateService");
const AccountUpdateService = require("../../services/account/AccountUpdateService");


exports.CreateReceiveAccount=async (req, res) => {
    await AccountCreateService(req,res,ReceiveAccountModel);
}

// exports.UpdateAccount=async(req,res)=>{
//     await AccountUpdateService(req,res,AccountModel)
// }
//
// exports.DeleteAccount=async(req,res)=>{
//     await DeleteService(req, res, AccountModel)
// }
//
// exports.GetAccount=async (req, res) => {
//     await DetailsByIDService(req, res, AccountModel);
// }
//
exports.GetAllReceiveAccount=async(req,res)=>{
    let Projection = {$project:{_id:1, name:1}};
    await GetAllService(req, res, ReceiveAccountModel,Projection)
}
