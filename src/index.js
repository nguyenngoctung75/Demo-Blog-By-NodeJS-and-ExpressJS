const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const route = require('./routes');
const db = require('./config/db');

// Connect to the database
db.connect();

const SortMiddleware = require('./app/middlewares/sortMiddleware')
const app = express();
const port = 3000;

//Thu vien chuyen tu GET POST sang phuong thuc khac vido nhu PUT PATCH
const methodOverride = require('method-override');
app.use(methodOverride('_method'))

//Custom middleware
app.use(SortMiddleware)
//Doi voi file tinh su dung static
app.use(express.static(path.join(__dirname, 'public')));

//Su dung middleware
app.use(
    express.urlencoded({
        extended: true, // Allow for the parsing of nested objects in the request body
    }),
);

//Khi client gui du lieu len server bang cac file js vd bang cac thu vien js: XMLHttpRequest, fetch, axios
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: require('./helpers/handlebars')
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

//127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
