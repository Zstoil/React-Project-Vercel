const Unlike = require('../models/UnLike');

exports.getAll = () => Unlike.find({});

exports.create = (ownerId) => Unlike.create({_ownerId: ownerId});

exports.delete = (id) => Unlike.findByIdAndDelete(id);