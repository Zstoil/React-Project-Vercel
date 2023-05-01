const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
});

const Like = mongoose.model('Like',likeSchema);

module.exports = Like;