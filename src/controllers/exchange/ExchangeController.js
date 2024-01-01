const ExchangeModel = require("../../models/exchange/ExchangeModel")
const ExchangeCreateService = require("../../services/exchange/ExchangeCreateService");
const GetUserExchangeService = require("../../services/exchange/GetUserExchangeService");
const GetAllExchangesService = require("../../services/exchange/GetAllExchangesService");


exports.CreateExchange=async (req, res) => {
    await ExchangeCreateService(req,res,ExchangeModel);
}

exports.GetUserExchanges=async (req, res) => {
    await GetUserExchangeService(req,res,ExchangeModel);
}

exports.GetAllExchange=async (req, res) => {
    await GetAllExchangesService(req,res,ExchangeModel);
}
