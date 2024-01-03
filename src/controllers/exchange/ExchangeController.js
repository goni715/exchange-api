const ExchangeModel = require("../../models/exchange/ExchangeModel")
const ExchangeCreateService = require("../../services/exchange/ExchangeCreateService");
const GetUserExchangeService = require("../../services/exchange/GetUserExchangeService");
const GetAllExchangesService = require("../../services/exchange/GetAllExchangesService");
const ConfirmSendEmailUtility = require("../../utility/ConfirmSendEmailUtility");
const UpdateService = require("../../services/common/UpdateService");
const GetExchangeService = require("../../services/exchange/GetExchangeService");


exports.CreateExchange=async (req, res) => {
    await ExchangeCreateService(req,res,ExchangeModel);
}

exports.GetUserExchanges=async (req, res) => {
    await GetUserExchangeService(req,res,ExchangeModel);
}

exports.GetAllExchange=async (req, res) => {
    await GetAllExchangesService(req,res,ExchangeModel);
}

exports.GetExchange=async (req, res) => {
    await GetExchangeService(req,res,ExchangeModel);
}

exports.SendExchangeConfirmEmail=async (req, res) => {
    await ConfirmSendEmailUtility(req,res);
}

exports.UpdateExchangeStatus=async (req, res) => {
    await UpdateService(req,res, ExchangeModel);
}
