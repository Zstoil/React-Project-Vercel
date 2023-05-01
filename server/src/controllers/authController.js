const router = require('express').Router();
const authService = require('../services/authService');


router.post('/login', async (req,res) => {
    const { email, password } = req.body;

    try{
        const result = await authService.login(email,password);
       
        res.json(result);

    }catch(error) {
      return res.status(404);
    }
});


router.post('/register', async (req,res) => {
    const { userName, email, password, repeatedPassword } = req.body;
    
    try {
     const result = await  authService.register(userName, email, password, repeatedPassword);
       
     res.json(result);

    } catch (error) {
        res.status(400);
    };

    
});

router.get('/logout' ,(req,res) =>{
   res.json({ok: true});
});

module.exports = router;