const CreateService= async (req,res,DataModel) => {
    try{

        let PostBody = req.body;
        let data = await DataModel.create(PostBody)
        res.status(200).json({message: "success", result: data});
    }
    catch (error) {
        res.status(500).json({message: "error", result: error.toString()});
    }
}
module.exports=CreateService