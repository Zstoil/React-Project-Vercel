const mongoose = require('mongoose');

const config = require('./index');

async function initDatabase() {
    mongoose.set('strictQuery', false);

    await mongoose.connect('mongodb+srv://stoilzlatin89:mG5jKz7gWp5sg8qP@data.xloathm.mongodb.net/?retryWrites=true&w=majority');//config.DB_URI

    console.log(`DB connected on ${config.DB_URI}`);
}

module.exports = initDatabase;