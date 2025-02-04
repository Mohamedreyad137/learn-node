const User = require('../models/customerSchema');
var moment = require('moment');


const viewUsers = (req, res) => {
    User.find()
    .then((result) => {
      res.render("index", {arr: result, moment: moment});
    })
    .catch((err) => {
      console.log(err);
    });
  
  }

  const editUser =  (req, res) => {
    User.findById(req.params.id)
    .then((result) => { 
      res.render("user/edit", {obj: result, moment: moment});
    })
    .catch((err) => {
      console.log(err);
    });
  }

const viewOneUser = (req, res) => {
    User.findById(req.params.id)
    .then((result) => { 
        res.render("user/view", {obj: result, moment: moment});
    })
    .catch((err) => {
        console.log(err);
    });
}

const searchOnUsers = (req, res) => {
    const searchText = req.body.searchText.trim();
    User.find({ $or: [ {firstName: searchText},{lastName:searchText}] })
        .then((result) => { 
            res.render("user/search", {arr: result, moment: moment});
        })
        .catch((err) => {
            console.log(err);
        });
}

const deleteUsers =  (req, res) => {
    User.deleteOne({_id: req.params.id}, req.body)
        .then(() => { 
            res.redirect("/"); 
        })
        .catch((err) => {
            console.log(err);
        });
}

const updateUsers = (req, res) => {
    User.updateOne({_id: req.params.id}, req.body)
        .then(() => {
          res.redirect("/");
        })
        .catch((err) => {
          console.log(err);
        });
  }


const addUsers = (req, res) => {
res.render("user/add");
}

const addNewUser = (req, res) => {
    User.create(req.body)
        .then(() => { 
          res.redirect("/");
        })
        .catch((err) => {
          console.log(err);
        });
  }

module.exports = {addNewUser,addUsers,viewUsers, editUser, viewOneUser,searchOnUsers,deleteUsers,updateUsers}