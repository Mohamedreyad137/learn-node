const express = require('express');
const router = express.Router();

const UserControllers = require('../controllers/userController');



// level 2
router.get('/', (req, res) => {
    res.render('welcome');
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.get('/signup', (req, res) => {
    res.render('auth/signup');
});





// Get Request
router.get('/home', UserControllers.viewUsers);
  
router.get('/edit/:id', UserControllers.editUser);
  
router.get('/view/:id', UserControllers.viewOneUser);
  
// POST Request
router.post('/search', UserControllers.searchOnUsers);

// Delete Request
router.delete('/edit/:id',UserControllers.deleteUsers);

// Update Request
router.put('/edit/:id', UserControllers.updateUsers);


module.exports = router