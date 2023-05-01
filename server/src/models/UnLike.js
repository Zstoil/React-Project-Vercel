const mongoose = require('mongoose');

const unLikeSchema = new mongoose.Schema({
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
});

const Unlike = mongoose.model('UnLike',unLikeSchema);

module.exports = Unlike;