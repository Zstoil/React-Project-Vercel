require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const initDatabase = require('./config/databaseInit');
const config = require('./config');


const { authentication } = require ('../src/middlewares/authMiddleware');


const app = express();

app.use(cors());
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(authentication());
app.use(routes);

// app.listen(process.env.DB_PORT);

initDatabase()
    .then(() => app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`)))
    .catch((err) => console.error(err.message));



