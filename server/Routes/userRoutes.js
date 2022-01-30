const express = require('express');
const { savePost } = require('../Controllers/postControllers');
const {registerUser, authUser} = require('../Controllers/userControllers');

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(authUser);
router.route('/posts').post(savePost);
module.exports = router;