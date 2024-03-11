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
  profilePicture:{
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz_hPrEDS3XE8LQIEQRNSSMzc8IryJhz_iXQ&usqp=CAU",
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
}, 
// to sort the post and sequence of updation
{timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;