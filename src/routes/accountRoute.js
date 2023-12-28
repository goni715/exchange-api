const express =require('express');
const SendAccountController = require("../controllers/account/SendAccountController");
const ReceiveAccountController = require("../controllers/account/ReceiveAccountController");

const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");


const router = express.Router();



// router.delete('/delete-account/:id', AuthVerifyMiddleware, IsAdmin, AccountController.DeleteAccount);
// router.put('/update-account/:id', AuthVerifyMiddleware, IsAdmin, AccountController.UpdateAccount);
// router.get('/get-account/:id', AuthVerifyMiddleware, IsAdmin, AccountController.GetAccount);


//Send-Account
router.post('/create-send-account', SendAccountController.CreateSendAccount);
router.get("/get-all-send-account", SendAccountController.GetAllSendAccount);
router.get('/get-send-account/:id', SendAccountController.GetSendAccount);



//Receive-Account
router.post('/create-receive-account', ReceiveAccountController.CreateReceiveAccount);
router.get("/get-all-receive-account", ReceiveAccountController.GetAllReceiveAccount);
router.get('/get-receive-account/:id', ReceiveAccountController.GetReceiveAccount);



module.exports=router;

