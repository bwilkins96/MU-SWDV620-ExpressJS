// SWDV 620: Web Applications
// Express practice

const express = require('express');
const app = express();
app.set('view engine', 'ejs');

// middleware
function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

function home(req, res, next) {
    console.log('The root url was accessed!');
    next();
}

app.use(logger);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routing
app.get('/', home, (req, res) => {
    res.render('index', {message: 'Hello from Express!'});
});

const userRouter = require('./routes/users');
app.use('/users', userRouter);

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});