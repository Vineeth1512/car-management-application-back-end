const mongoose = require("mongoose");
const express = require("express");
const app = express();
const portNo = 5566;
const carRoutes =require("./routes/car.route");
const cors = require("cors")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(carRoutes);





mongoose.connect("mongodb+srv://dbUser:dbUserPassword@atlascluster.w6sb48g.mongodb.net/Players").then(() => {
    console.log("Connected to mongodb")
    app.listen(portNo, () => {
        console.log("server is started on port no 5566")
    })
}).catch((err) => {
    console.log("Could not connect to mongodb " + err)
})