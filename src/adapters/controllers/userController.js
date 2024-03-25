import userCreate from "../../application/use_cases/user/create.js"





const userController=(userRepositoryInt,userRepositoryImpl)=>{

  const userRepository=userRepositoryInt(userRepositoryImpl())



     const signIn=async(req,res,next)=>{
      const {userName,password,email}=req.body

        try {
          await userCreate(userName,password,email,userRepository)     
          res.status(200).json({message:"new user created"}) 
        } catch (error) {
          next(error)
        }

     }

     return{
      signIn
     }

}


export default userController