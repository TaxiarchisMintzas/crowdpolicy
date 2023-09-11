import mongoose from "mongoose";
 

// SCHEMA
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  number: String,
  email: String,
});

// MODEL
const User = mongoose.model("User", userSchema);

export default User;
export {userSchema};
