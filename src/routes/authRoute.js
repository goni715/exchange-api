const express =require('express');
const UserController = require("../controllers/user/UserController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");


const router = express.Router();




router.post('/register',UserController.Registration);
router.post('/login',UserController.Login);


router.post("/apply-doctor", AuthVerifyMiddleware, UserController.ApplyDoctor);

router.get("/get-all-user", AuthVerifyMiddleware, UserController.GetAllUser);
router.put("/update-user/:id", AuthVerifyMiddleware, UserController.UpdateUser);


//ForgotPassword
router.post("/forgot-password-verify-email",UserController.ForgotPasswordVerifyEmail);
router.get("/forgot-password-verify-otp/:email/:otp",UserController.ForgotPasswordVerifyOTP);
router.post("/create-new-password",UserController.CreateNewPassword);




//Recover Password With Link
router.post("/recover-password-verify-email",UserController.RecoverPasswordVerifyEmail);
router.post("/reset-password",UserController.ResetPassword);


module.exports=router;

