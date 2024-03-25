import authController from "../../../adapters/controllers/authController.js"
import authRepositoryInt from "../../../application/repositories/authRepositoryInt.js"
import authRepositoryImpl from "../../database/mongodb/repositories/authRepositoryImpl.js"




const authRouter=(express)=>{

  const router=express.Router()

  const controller=authController(authRepositoryInt,authRepositoryImpl)

  router.route('/')
  .post(controller.login)

  return router
}



export default authRouter