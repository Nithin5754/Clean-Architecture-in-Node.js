import productController from "../../../adapters/controllers/productController.js"
import categoryRepositoryInt from "../../../application/repositories/categoryRepositoriesIInt.js"
import productRepositoryInt from "../../../application/repositories/productRepositoryInt.js"
import categoryRepositoryImpl from "../../database/mongodb/repositories/categoryRepositoryImpl.js"
import productRepositoryImpl from "../../database/mongodb/repositories/productRepositoryImpl.js"


const productRouter=(express)=>{

  const router=express.Router()

  const controller=productController(productRepositoryInt,productRepositoryImpl,categoryRepositoryInt,categoryRepositoryImpl)



  router.route('/')
  .get(controller.listAllProduct)
  .post(controller.createProducts)
  

  router.route('/:id')
  .post(controller.updateProductHandler)
  .delete(controller.deleteProductHandler)


return router

}


export default productRouter