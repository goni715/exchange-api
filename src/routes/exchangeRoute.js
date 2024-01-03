const express =require('express');
const ExchangeController = require("../controllers/exchange/ExchangeController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");

const router = express.Router();


router.post('/create-exchange',AuthVerifyMiddleware, ExchangeController.CreateExchange);
router.get('/get-user-exchanges',AuthVerifyMiddleware, ExchangeController.GetUserExchanges);
router.get('/get-all-exchange',AuthVerifyMiddleware, ExchangeController.GetAllExchange);
router.get('/get-exchange/:id',AuthVerifyMiddleware, ExchangeController.GetExchange);
router.post('/send-exchange-confirm-email',AuthVerifyMiddleware, ExchangeController.SendExchangeConfirmEmail);
router.put('/update-exchange-status/:id',AuthVerifyMiddleware, ExchangeController.UpdateExchangeStatus);



module.exports=router;

