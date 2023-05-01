const Car = require ("../models/Car");

exports.getAll = () => Car.find({}); 

exports.getOne = (id) => Car.findById(id).populate('like').populate('unLike').populate('comments');

exports.create = (ownerId, data) => Car.create({...data, _ownerId: ownerId});

exports.edit = (id, data) => Car.findByIdAndUpdate(id, data);

exports.delete = (id) => Car.findByIdAndDelete(id);

exports.getOneCar = (id) => Car.findById(id);