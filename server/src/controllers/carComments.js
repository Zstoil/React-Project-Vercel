const router = require('express').Router();

const commentsService = require('../services/commentsService');

const carService = require('../services/carService');

const authService = require('../services/authService');

router.get('/edit/:commentId',async (req,res) => {
    
   const comment = await commentsService.getOne(req.params.commentId);

   res.json(comment);

});

router.post('/',async (req,res) => {

    const data = req.body;
    const userId = req.user._id;
    const text = data.comment;
    const carId = data.carId;

    
    const user = await authService.findById(userId);

    const userName = user.userName;

    const comment = await commentsService.create(text,userId,userName);

    const car = await carService.getOne(carId);

    car.comments.push(comment);

    await car.save();
    
    res.json(comment);
});

router.get('/:carId', async (req,res) => {

    const carId = req.params.carId;
    
    const car = await carService.getOne(carId);

    let result = car.comments
   
    res.json(result);

});

router.put('/:commentId', async (req,res) => {

    const commentData = req.body;
    
    const updateComment = await commentsService.edit(req.params.commentId, commentData);

    res.json(updateComment);
});

router.delete('/:commentId', async (req,res) => {

    const carId = req.body.carId;

    const car = await carService.getOneCar(carId);
    
    const comment = await commentsService.delete(req.params.commentId);

    car.comments.splice(req.params.commentId,1);

    await car.save();

    res.json({ok: true});
});


module.exports = router;