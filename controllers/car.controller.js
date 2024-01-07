const Car = require("../models/car.model");

module.exports.addCar = async (req, res) => {
    try {

        // const {name, model,price, imageUrl}=req.body;
        const carData = await Car.create(req.body)
        return res.status(200).json({
            message: "Car added successfully..!",
            data: carData
        })

    } catch (err) {
        //Handling error
        return res.status(500).json({
            error: err
        })
    }
}
module.exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find({});
        return res.status(200).json({
            message: "All cars are Fetched.",
            data: cars
        })

    } catch (err) {
        //Handling error
        return res.status(500).json({
            error: err
        })
    }
}

module.exports.deleteCar = async (req, res) => {
    try {
        const checkCar = await Car.findById(req.params.id);
        if (!checkCar) {
            return res.status(400).json({
                message: "Car not found"
            })
        }

        const deleteCar = await Car.findByIdAndDelete({
            _id: req.params.id
        })
        return res.status(200).json({
            message: "Car deleted successfully..",
            car: deleteCar
        })

    }
    catch (err) {
        //Handling error
        return res.status(500).json({
            message: "Internal Server Error..!"
        })
    }

}
module.exports.updateCar =async(req,res)=>{
    try{
        const checkCar = await Car.findById(req.params.id);
        if (!checkCar) {
            return res.status(400).json({
                message: "Car not found"
            })
        }
        const updateCar = Car.findByIdAndUpdate(
            {_id:req.params.id}
            ,
            req.body,{
                new:true
            }
            )

            return res.status(200).json({
                message:"Car Details updated successfully..",
                car:updateCar
            })

    } catch (err) {
        //Handling error
        return res.status(500).json({
            message: "Internal Server Error..!"
        })
    }

}