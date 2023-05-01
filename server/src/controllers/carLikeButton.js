const router = require('express').Router();

const carLikeService = require ('../services/carLikeService');
const carService = require ('../services/carService');

// router.get('/',async (req,res) => {

//     const likes = await carLikeService.getAll();
    
//     res.json(likes);
//  });

 router.post('/',async (req,res) => {
    const {carId, userId} = req.body;
    
    const like = await carLikeService.create(userId);
    
    const car = await carService.getOne(carId);
    
    car.like.push(like._id);

    await car.save();

    res.json(like);
});

router.delete('/:likeId', async (req,res) => {

    const carId = req.body.carId;

    const car = await carService.getOneCar(carId);
    
    const like = await carLikeService.delete(req.params.likeId);

    car.like.splice(req.params.likeId,1);

    await car.save();

    res.json({ok: true});
})

router.get('/:carId', async (req,res) => {
    const carId = req.params.carId;
    
    const car = await carService.getOne(carId);

    let result = car.like

    res.json(result);

})


module.exports = router;