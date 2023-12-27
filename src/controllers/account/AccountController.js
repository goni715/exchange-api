const AccountModel = require("../../models/account/AccountModel");
const DeleteService = require("../../services/common/DeleteService");
const DetailsByIDService = require("../../services/common/DetailsService");
const GetAllService = require("../../services/common/GetAllService");
const AccountCreateService = require("../../services/account/AccountCreateService");
const AccountUpdateService = require("../../services/account/AccountUpdateService");


exports.CreateAccount=async (req, res) => {
    await AccountCreateService(req,res,AccountModel);
}

exports.UpdateAccount=async(req,res)=>{
    await AccountUpdateService(req,res,AccountModel)
}

exports.DeleteAccount=async(req,res)=>{
    await DeleteService(req, res, AccountModel)
}

exports.GetAccount=async (req, res) => {
    await DetailsByIDService(req, res, AccountModel);
}

exports.GetAllAccount=async(req,res)=>{
    let Projection = {$project:{_id:1, name:1,createdAt:1, updatedAt:1}};
    await GetAllService(req, res, AccountModel,Projection)
}
