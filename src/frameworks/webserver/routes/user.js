import userController from "../../../adapters/controllers/userController.js"
import userRepositoryInt from "../../../application/repositories/userRepositoryInt.js"
import userRepositoryImpl from "../../database/mongodb/repositories/userRepositoryImpl.js"



const userRouter=(express)=>{
  const router=express.Router()


  const controller=userController(userRepositoryInt,userRepositoryImpl)


  router.route('/')
  .post(controller.signIn)
  
return router
}


export default userRouter