const ExchangeModel = require("../../models/exchange/ExchangeModel")
const DeleteService = require("../../services/common/DeleteService");
const DetailsService = require("../../services/common/DetailsService");
const GetAllService = require("../../services/common/GetAllService");
const AccountCreateService = require("../../services/account/AccountCreateService");
const AccountUpdateService = require("../../services/account/AccountUpdateService");
const CreateService = require("../../services/common/CreateService");


exports.CreateExchange=async (req, res) => {
    await CreateService(req,res,ExchangeModel);
}
