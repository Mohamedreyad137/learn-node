const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// Define schema
const authUserSchema = new Schema({
    userName: String,
    email: String,
    password: String
});

authUserSchema.pre("save", async function (next) {
 const salt = await bcrypt.genSalt();
 this.password = await bcrypt.hash(this.password, salt);
 next();
});


// Create model
const AuthUser = mongoose.model('User', authUserSchema);

// Export model
module.exports = AuthUser;