import categoryController from "../../../adapters/controllers/categoryController.js"
import categoryRepositoryInt from "../../../application/repositories/categoryRepositoriesIInt.js"
import categoryRepositoryImpl from "../../database/mongodb/repositories/categoryRepositoryImpl.js"





const categoryRouter=(express)=>{
    
  const router=express.Router()

  const controller=categoryController(categoryRepositoryInt,categoryRepositoryImpl)

  router.route('/')
  .get(controller.viewAllCategories)
  .post(controller.AddNewCategory)


  router.route('/:id')
  .put(controller.updateCategory)
  .delete(controller.deleteCategory)

  return router

}


export default categoryRouter