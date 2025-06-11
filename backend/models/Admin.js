//  Schema for administrator authentication

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AdminSchema = new mongoose.Schema({

    email: {
      type: String,
      required: true,
      unique: true,
    },

    passwordHash: {
      type: String,
      required: true,
    }

  }, {

    timestamps: true,

  });

  AdminSchema.methods.validatePassword = function(password) {

    return bcrypt.compare(password, this.passwordHash);

  };

  module.exports = mongoose.model('AdminUser', AdminSchema);