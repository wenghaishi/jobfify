import mongoose from "mongoose";
import validator from 'validator';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "please provide email"],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email'
    },
    unique: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: [true, "please provide password"],
  },
  lastName: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 20,
    default: 'lastName',
  },
  location: {
    type: String,
    maxlength: 20,
    trim: true,
    default: 'myCity'
  }
});

export default mongoose.model('User', UserSchema)
