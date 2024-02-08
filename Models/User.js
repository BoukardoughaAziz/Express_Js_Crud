const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String
});

module.exports = mongoose.model('User', UserSchema);
