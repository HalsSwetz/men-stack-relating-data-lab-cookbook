const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// router logic will go here - 

module.exports = router;


router.get('/', async (req, res) => {
    try {
    res.render('foods/index.ejs');
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
  });
  