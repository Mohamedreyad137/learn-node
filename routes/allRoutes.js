const express = require('express');
const router = express.Router();

const UserControllers = require('../controllers/userController');
const AuthUser = require('../models/authUser');
const bcrypt = require('bcrypt');
var jwt = require("jsonwebtoken");


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

router.post('/signup', async (req, res) => {
    try {
        const result = await AuthUser.create(req.body);
        res.redirect('/login');
    } catch (err) {
        console.log(err);
    }
});


router.post('/login', async (req, res) => {

   const loginUser = await AuthUser.findOne({email: req.body.email});

   if (loginUser === null) {
       console.log("this email not found")
   } else {
    const match = await bcrypt.compare(req.body.password, loginUser.password);
    if(match) {
        var token = jwt.sign({ id: loginUser._id }, "reyad");
        res.cookie("jwt", token, { httpOnly: true, maxAge: 86400000 });
        res.redirect("/home");

    } else {
        console.log("wrong password");
    }
   }
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