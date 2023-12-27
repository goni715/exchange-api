const mongoose = require("mongoose");
const GetRateService = async (req, res, RateModel) => {
  try{
      const firstId = req.body['firstId'];
      const secondId = req.body['secondId'];
      const ObjectId = mongoose.Types.ObjectId;

      //First-Database-Process//get-data
      const rateCount = await RateModel.aggregate([
          {$match: {accounts: {$all: [new ObjectId(firstId), new ObjectId(secondId)]}}}
      ]);


      if(rateCount.length > 0) {
          res.status(200).json({message: "success", result:rateCount[0]});
      }
      else {
          res.status(404).json({message: "fail", result: "Could not find this rate"});
      }
  }
  catch(error){
      res.status(500).json({message: "error", result: error.toString()});
  }
}

module.exports = GetRateService