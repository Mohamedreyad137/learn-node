const express = require('express');
const router = express.Router();
const User = require('../models/customerSchema');
var moment = require('moment');
const UserControllers = require('../controllers/userController');



// Get Request
router.get('/', UserControllers.viewUsers);
  
router.get('/edit/:id', UserControllers.editUser);
  
router.get('/view/:id', UserControllers.viewOneUser);
  
// POST Request
router.post('/search', UserControllers.searchOnUsers);

// Delete Request
router.delete('/edit/:id',UserControllers.deleteUsers);

// Update Request
router.put('/edit/:id', UserControllers.updateUsers);


module.exports = router