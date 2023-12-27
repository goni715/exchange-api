const express =require('express');
const RateController = require("../controllers/rate/RateController");


const router = express.Router();



router.post('/create-rate', RateController.CreateRate);
router.post('/get-rate', RateController.GetRate);

// router.get("/get-all-rate", RateController.GetAllContact);
// router.delete('/delete-rate/:id', RateController.DeleteContact);
// router.patch('/update-rate/:id', RateController.UpdateContact);
// router.get('/get-rate/:id', RateController.GetContact);





module.exports=router;

