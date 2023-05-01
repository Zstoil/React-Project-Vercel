const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment:{
        type: String,
        require: true,
    },
    userName:{
        type: String,
        require: true,
    },
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
});

const Comments = mongoose.model('Comments',commentSchema);

module.exports = Comments;