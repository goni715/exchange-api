const ExchangeModel = require("../../models/exchange/ExchangeModel")
const DeleteService = require("../../services/common/DeleteService");
const DetailsService = require("../../services/common/DetailsService");
const GetAllService = require("../../services/common/GetAllService");
const AccountCreateService = require("../../services/account/AccountCreateService");
const AccountUpdateService = require("../../services/account/AccountUpdateService");
const ExchangeCreateService = require("../../services/exchange/ExchangeCreateService");
const GetUserExchangeService = require("../../services/exchange/GetUserExchangeService");


exports.CreateExchange=async (req, res) => {
    await ExchangeCreateService(req,res,ExchangeModel);
}

exports.GetUserExchanges=async (req, res) => {
    await GetUserExchangeService(req,res,ExchangeModel);
}
