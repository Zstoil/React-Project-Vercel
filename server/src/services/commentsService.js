const Comments = require('../models/Comments');

exports.create = (data,userId,userName) => Comments.create({comment: data, _ownerId: userId, userName: userName});

exports.edit = (id, data) => Comments.findByIdAndUpdate(id, data);

exports.getOne = (id) => Comments.findById(id);

exports.delete = (id) => Comments.findByIdAndDelete(id);

