import userLogin from "../../application/use_cases/user/auth.js"






const authController=(authRepositoryInt,authRepositoryImpl)=>{

  const authRepository=authRepositoryInt(authRepositoryImpl())


  const login=async(req,res,next)=>{
    const {email,password}=req.body 
   
      try {
      
       let isLogged= await userLogin(email,password,authRepository)
       console.log(isLogged,"hey");

      return  res.status(200).json(isLogged) 
      } catch (error) {
        next(error)
      }

  }

  return {
    login
  }


}


export default authController