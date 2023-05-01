const Like = require('../models/Like');

exports.getAll = () => Like.find({});

exports.create = (ownerId) => Like.create({_ownerId: ownerId});

exports.delete = (id) => Like.findByIdAndDelete(id);
