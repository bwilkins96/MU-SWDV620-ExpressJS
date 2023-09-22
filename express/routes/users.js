// SWDV 620: Web Applications
// Express router

const express = require('express');
const router = express.Router();

// Users array and middleware
const users = [ {name: 'Sally'}, {name: 'Josh'} ];
router.param('id', (req, res, next, id) => {
    req.user = users[id];
    next();
});

// Routing
router.get('/', (req, res) => {
    console.log(req.query);
    res.send('Users List');
});

router.get('/new', (req, res) => {
    res.render('users/form');
});

router.post('/', (req, res) => {
    const firstName = req.body.firstName;
    let isValid = true;

    if (isValid) {
        users.push({name: firstName});
        res.redirect(`/users/${users.length - 1}`);
    } else {
        res.render('users/form', {firstName: firstName});
    }
});

router.route('/:id')
    .get((req, res) => {
        res.send(`Get User with ID ${req.params.id}: ${JSON.stringify(req.user)}`);
    }).put((req, res) => {
        res.send(`Update User with ID: ${req.params.id}`);
    }).delete((req, res) => {
        res.send(`Delete User with ID: ${req.params.id}`);
    });

module.exports = router;
