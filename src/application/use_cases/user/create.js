import UserEntity from "../../../enities/user.js"
import { ERROR } from "../../../frameworks/webserver/middleware/HttpError.js"



const userCreate=async(userName,password,email,userRepository)=>{
   
  const userReg=await userRepository.isUserExist(email)
  if(userReg){
    throw new ERROR.UserExistError("user is already exist")
  }

  let userEntity=new UserEntity(userName,password,email,userRepository)

  const createNewUser=await userRepository.creatingUser(userEntity)

return createNewUser

      

}

export default userCreate