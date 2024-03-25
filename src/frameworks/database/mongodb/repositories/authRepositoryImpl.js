import User from "../models/user.js";
import bcrypt from 'bcryptjs';



const authRepositoryImpl=()=>{
const authenticatedUser=async (email,password)=>{
  
 const isUser=await User.findOne({email})


  const isMatch = await bcrypt.compare(password, isUser.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  return  isUser

}

  return {authenticatedUser}
  
}

export default authRepositoryImpl