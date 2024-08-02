import mongoose from "mongoose";

const useSchema = mongoose.Schema({
  fullname:{
    type:String,
    require: true
  },
  email:{
    type:String,
    require: true,
    unique: true
  },
  password:{
    type:String,
    require: true
  }

})

const User = mongoose.model("User", useSchema);

export default User;