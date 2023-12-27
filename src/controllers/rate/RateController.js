const RateModel = require("../../models/rate/RateModel");
const CreateRateService = require("../../services/rate/CreateRateService");
const GetRateService = require("../../services/rate/GetRateService");


exports.CreateRate=async (req, res) =>{
    await CreateRateService(req,res,RateModel);
}

exports.GetRate=async (req, res) =>{
    await GetRateService(req,res,RateModel);
}
