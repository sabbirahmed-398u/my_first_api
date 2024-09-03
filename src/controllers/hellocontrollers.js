exports.hello= (req,res) =>{
    res.status(200).json({status : "ok", data :"my first express rest api"})
};