const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.route('/posts/create')
    .post(adminController.submitPosts);


module.exports = router;
