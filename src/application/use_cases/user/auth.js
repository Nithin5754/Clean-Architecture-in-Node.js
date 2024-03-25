import { ERROR } from "../../../frameworks/webserver/middleware/HttpError.js"




const userLogin=async(email,password,authRepository)=>{

  const isAuthenticated=await authRepository.authenticatedUser(email,password)

  if(!isAuthenticated){
    throw new ERROR.UserExistError("user is not existed please try again")
  }

  return isAuthenticated



}

export default userLogin