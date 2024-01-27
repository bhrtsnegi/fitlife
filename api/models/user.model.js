import mongoose from "mongoose";

// used to make a set of rules to the user
const userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
  },
}, 
// to sort the post and sequence of updation
{timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;