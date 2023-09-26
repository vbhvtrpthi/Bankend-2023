//server is the bank and any functionality like cashier/cash withdrawals are api
// will be writing multiple api's in a single server
//can't send post request using url bar of the browser
//html form method property can be either get or post. (put, patch delete ❌)
// to make (put, patch , delete) request using browsers (fetch api, xmlhttprequest) 

//hw send html code + json file
// const http = require("http");

// const port = 3000;

// const server = http.createServer(function listener(request,response){
    
//     if(request.url == '/home'){

//       response.send("finsihed")
//       response.end("call finished")
//     }
//     console.log("request received | Give us some time we are processing it");
// })

// server.listen(port,function exec(){
//     console.log(`server is up and running on ${port}`);
// })


// //hone work

const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.json({
        message: "OK get"
    })
  })

app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)}
)