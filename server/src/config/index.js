const config = {
    production: {
        PORT: 3030,
        DB_URI: 'mongodb+srv://stoilzlatin89:mG5jKz7gWp5sg8qP@data.xloathm.mongodb.net/?retryWrites=true&w=majority',
        SECRET: 'SOMEPRODSECRET',
    },
    development: {
        PORT: 3030,
        DB_URI: 'mongodb://127.0.0.1:27017/data',
        SECRET: 'SOMEDEVSECRET',
    }
};


module.exports = config[process.env.node_env || 'development'];