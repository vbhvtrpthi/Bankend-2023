const express = require("express");
const router = express.Router();
const {InfoController} = require("../../controllers")
console.log(InfoController);


// router.get("/info",(req, res)=>{
//     return res.json({
//         ms:"Ok from get"
//     })
// })
router.get("/info", InfoController.info)
router.post("/info",(req, res)=>{
    return res.json({
        ms:"Ok from post"
    })
})

module.exports = router;