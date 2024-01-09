const RateModel = require("../../models/rate/RateModel");
const CreateRateService = require("../../services/rate/CreateRateService");
const GetRateService = require("../../services/rate/GetRateService");
const GetAllRateService = require("../../services/rate/GetAllRateService");


exports.CreateRate=async (req, res) =>{
    await CreateRateService(req,res,RateModel);
}

exports.GetRate=async (req, res) =>{
    await GetRateService(req,res,RateModel);
}

exports.GetAllRate=async(req,res)=>{
    await GetAllRateService(req, res, RateModel)
}
