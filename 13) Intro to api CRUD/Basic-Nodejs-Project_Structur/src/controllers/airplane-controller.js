const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");

async function createAirplane(req,res){
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity:req.body.capacity
        });
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message:"Successfully created an airplane",
            data:airplane,
            error:{}
        })
        
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message:"Failed to create an airplane",
            data:{},
            error:error
        })
        
    }
}

async function getAllAirplane(req,res){
    try {
        const airplane = await AirplaneService.getAllAirplane();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully Fetched all the airplane",
            data:airplane,
            error:{}
        })
        
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message:"Failed to fetch an airplane",
            data:{},
            error:error
        }) 
    }
}
module.exports = {
    createAirplane,
    getAllAirplane
}