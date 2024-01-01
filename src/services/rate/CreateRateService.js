const mongoose = require("mongoose");

const CreateRateService = async (req, res, RateModel) => {

    try {
        const firstId = req.body['firstId'];
        const secondId = req.body['secondId'];
        const unit = req.body['unit'];
        const current = req.body['current'];
        const ObjectId = mongoose.Types.ObjectId;
        const PostBody = {
            accounts: [
                firstId, secondId
            ],
            unit,
            current
        }

        //First-Database-Process//get-data
        const rateCount = await RateModel.aggregate([
            {$match: {accounts: {$all: [new ObjectId(firstId), new ObjectId(secondId)]}}}
        ]);


        if (rateCount.length === 0) {
            const data = await RateModel.create(PostBody);
            res.status(200).json({message: "success", data:data});
        }
        else {
            res.status(409).json({message: "fail", data: "already rate created"});
       }
    }
    catch(error){
        res.status(500).json({message: "error", data: error.toString()});
    }

}

module.exports = CreateRateService;