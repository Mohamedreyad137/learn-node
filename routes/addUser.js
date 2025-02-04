const express = require('express');
const router = express.Router();
const User = require('../models/customerSchema');
var moment = require('moment');
const UserControllers = require('../controllers/userController')


router.get('', UserControllers.addUsers);
  
router.post('', UserControllers.addNewUser);

module.exports = router