
import User from "../models/user.js"





const userRepositoryImpl=()=>{

  const isUserExist=async(email)=>{
    return await User.findOne({email})
  }

  const creatingUser=async(userEntity)=>{
    const user=new User(userEntity)

    return   await user.save()

    
  }

  return {
    isUserExist,
    creatingUser
  }

}


export default userRepositoryImpl