const User = require('../models/User');
const bcrypt = require('bcrypt');

const jwt =require('../lib/jsonwebtoken');
const { SECRET } = require('../constants');

exports.findByUsername = (username) => User.findOne({ username });

exports.findByEmail = (email) => User.findOne({ email });

exports.findById = (id) => User.findById(id);

exports.register = async (userName, email, password, repeatedPassword) => {
    
    if (password !== repeatedPassword) {
        throw new Error('Password mismatch!')
    }

    const existingUser = await User.findOne({$or: [
        {email},
        {userName}
    ]});

    if (existingUser) {
        throw new Error('User exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    try{
        await User.create({ userName, email, password: hashedPassword })
    }catch (error){
        throw new Error(error);
    }
    

    return this.login(email, password);
};

exports.login = async (email, password) => {
    const user = await this.findByEmail(email);

    if (!user) {
        throw new Error('Invalid email or password');
        
    }

    const isValid = await bcrypt.compare(password,user.password);

    if (!isValid) {
        throw new Error('Invalid email or password');
    }
    //Generate token
    const payload = {
        _id: user._id,
        email,
    };

   const token = await jwt.sign(payload, SECRET);

   return {
    _id: user._id,
    email: user.email,
    userName : user.userName,
    accessToken: token,
   }
};