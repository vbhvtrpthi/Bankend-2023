const express = require('express');
const router = express.Router();
const {AirplaneController} = require('../../controllers')

router.post('/', AirplaneController.createAirplane)
router.post('/getAll', AirplaneController.getAllAirplane)
router.get('/',(req,res)=>{
  res.send("agsffd")
})

module.exports = router
