const express = require("express");
const router = express.Router();
const carController = require("../controllers/car.controller");
router.post("/addCar", (req, res, next) => {
    const { name, model, price, imageUrl } = req.body;
    if (!name || !price || !model || !imageUrl) {
        return res.status(400).json({
            message: "all fields are required."
        })
    }
    next()
},
    carController.addCar);
router.get("/all", carController.getAllCars);
router.delete("/delete/:id", carController.deleteCar)
router.put("/update/:id", (req, res, next) => {
    const { name, model, price, imageUrl } = req.body;
    if (!name || !price || !model || !imageUrl) {
        return res.status(400).json({
            message: "all fields are required."
        })
    }
    next()
}, carController.updateCar);

module.exports = router;