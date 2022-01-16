var express = require('express');
const DB = require('../services/DB');

var router = express.Router();

router.get('/', async function(req, res) {
    try {
        // Run a basic query, if it succeeds without error, assume the database is up
        const users = await DB('users').select(['id', 'name']);
        res.json({state: "up", database: "up"});
    } catch(error) {
        console.error("Database Error: " + error)
        res.json({state: "up", database: "down"});
    }
});

module.exports = router;