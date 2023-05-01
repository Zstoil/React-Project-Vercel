const router = require('express').Router();

const carUnLikeService = require ('../services/carUnLikeService');
const carService = require ('../services/carService');

// router.get('/',async (req,res) => {

//     const unLikes = await carUnLikeService.getAll();
    
//     res.json(unLikes);
//  });

 router.post('/',async (req,res) => {
    const {carId, userId} = req.body;
    
    const unLike = await carUnLikeService.create(userId);
    
    const car = await carService.getOne(carId);
    
    car.unLike.push(unLike._id);

    await car.save();

    res.json(unLike);
});

router.delete('/:unLikeId', async (req,res) => {

    const carId = req.body.carId;

    const car = await carService.getOneCar(carId);

    const unLike = await carUnLikeService.delete(req.params.unLikeId);

    car.unLike.splice(req.params.unLikeId,1);

    await car.save();
    
    res.json({ok: true});
})

router.get('/:carId', async (req,res) => {
    const carId = req.params.carId;
    
    const car = await carService.getOne(carId);

    let result = car.unLike
   
    res.json(result);

})


module.exports = router;