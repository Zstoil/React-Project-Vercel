const router = require('express').Router();

const carService = require('../services/carService');

router.get('/',async (req,res) => {

   const cars = await carService.getAll();

   res.json(cars);
});

router.get ('/:carId', async (req,res) => {

    const car = await carService.getOne(req.params.carId);
   
    res.json(car)
})

router.post('/',async (req,res) => {
    const carData = req.body;

    const car = await carService.create(req.user._id, carData);
    
    res.json(car);
});

router.put('/:carId', async (req,res) => {
    const carData = req.body;

    const updateCar = await carService.edit(req.params.carId, carData);

    res.json(updateCar);
});

router.delete('/:carId', async (req,res) => {

    const car = await carService.delete(req.params.carId);

    res.json({ok: true});
});

module.exports = router;