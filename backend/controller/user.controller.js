import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup =async(req, res)=>{
  try {
    const {fullname, email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
      return res.status(400).json({message: "User already exists"})
    }
    const hashPassword = await bcryptjs.hash(password, 10)
    const createUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    })

    await createUser.save().then((user) =>{
      res.status(201).json({message: "User created sucessfullly", user:{_id: createUser._id, fullname: createUser.fullname}})
    })

  } catch (error) {
    console.log("Error: " + error.message);
    
  }
}
// Best way to handle async use Promise instead of await


export const login = async (req, res)=>{
try {
  const {email, password ,fullname} = req.body;

const user = await User.findOne({email});
console.log("hey " + fullname);


const isMatch =  await bcryptjs.compare(password, user.password)
if(!isMatch || !user){
  return res.status(400).json({message: error.message})
}
else{
res.status(200).json({message: "Login Sucessfully", user: {
  _id: user._id,
  fullname : user.fullname,
  email: user.email,

}})
}
} catch (error) {
  console.log("Error: "+ error.message);
  res.status(500).json({message:" Invalid username or password"})
}
} 