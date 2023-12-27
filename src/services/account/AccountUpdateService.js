const mongoose = require("mongoose");
const AccountUpdateService = async (req, res, AccountModel) => {
   try{
       let id = req.params.id;
       const ObjectId = mongoose.Types.ObjectId;
       let UpdateQueryObject = {_id: new ObjectId(id)};
       let reqBody=req.body;

       let existingAccount = await AccountModel.aggregate([{$match:{name: reqBody['name']}}]);
       if(existingAccount.length === 0){
           let Update = await AccountModel.updateOne(UpdateQueryObject,reqBody);
           res.status(200).json({status: "success", data: Update});
       }
       else{
           res.status(409).json({message: "fail", result:"This account is Already Existed"});
       }
   }
   catch(error){

   }
}

module.exports = AccountUpdateService