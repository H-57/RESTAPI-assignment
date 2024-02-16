import { Schema,model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: [Number,"age should be a number"],
  },
  country: {
    type: String
  },
  password: {
    type: String,
    required: true
  }
});

const User = model('User', userSchema);

export default User