const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/userController')


router.get('', UserControllers.addUsers);
  
router.post('', UserControllers.addNewUser);

module.exports = router