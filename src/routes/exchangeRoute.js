const express =require('express');
const ExchangeController = require("../controllers/exchange/ExchangeController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");


const router = express.Router();



router.post('/create-exchange', ExchangeController.CreateExchange);
// router.get("/get-all-contact", AuthVerifyMiddleware, IsAdmin, ContactController.GetAllContact);
// router.delete('/delete-contact/:id', AuthVerifyMiddleware, IsAdmin, ContactController.DeleteContact);
// router.patch('/update-contact/:id', AuthVerifyMiddleware, IsAdmin, ContactController.UpdateContact);
// router.get('/get-contact/:id', AuthVerifyMiddleware, ContactController.GetContact);
//
//



module.exports=router;

