const newsRouter = require('./news');
const coursesRouter = require('./courses');
const meRouter = require('./me');
const siteRouter = require('./site');

function route(app) {
    // app.get('/news', (req, res) => {
    //     res.render('news')
    // })

    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);


    // app.get('/search', (req, res) => {
    //     // console.log(req.query)
    //     res.render('search')
    // })

    // app.post('/search', (req, res) => {
    //     // console.log(req.body)
    //     res.send('')
    // })

    // app.get('/', (req, res) => {
    //     res.render('home')
    // })

    app.use('/', siteRouter);
}

module.exports = route;
