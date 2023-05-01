const config = {
    production: {
        PORT: 3030,
        DB_URI: 'mongodb+srv://z-vercel:sM6qSxKf32w8q8dw@z-vercel.bs0nqlv.mongodb.net/test',
        SECRET: 'SOMEPRODSECRET',
    },
    development: {
        PORT: 3030,
        DB_URI: 'mongodb+srv://z-vercel:sM6qSxKf32w8q8dw@z-vercel.bs0nqlv.mongodb.net/test',
        SECRET: 'SOMEDEVSECRET',
    }
};


module.exports = config[process.env.node_env || 'development'];