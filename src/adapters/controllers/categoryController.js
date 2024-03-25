import addNewCategory from "../../application/use_cases/category/create.js"
import deleteCategoryById from "../../application/use_cases/category/delete.js"
import updateOneById from "../../application/use_cases/category/updateOneById.js"
import findAll from "../../application/use_cases/category/view.js"
// import updateOneById from '../../application/use_cases/category/updateOne.js'




const categoryController=(categoryRepositoryInt,categoryRepositoryImpl)=>{

  const repository=categoryRepositoryInt(categoryRepositoryImpl())

  const viewAllCategories=async(req,res,next)=>{
    try {
      const allCategories=await findAll(repository)
      console.log(allCategories);
      res.json(allCategories);
    } catch (error) {
      next(error)
    }
  }


const AddNewCategory=async(req,res,next)=>{
  try {
      const {name}=req.body

      const newCategory=await addNewCategory(name,repository)
  
      res.status(200).json(newCategory);
  } catch (error) {
    next(error)
    
  }
}


const updateCategory=async (req,res,next)=>{
  try {
    const {name}=req.body
    const id=req.params.id 
    const updateCategory=await updateOneById(id,name,repository)
    res.status(200).json(updateCategory);
  } catch (error) {
    console.error()
    next(error)
  }
}

const deleteCategory=async(req,res,next)=>{
   try {
      const {id}=req.params

      await deleteCategoryById(id,repository)
res.status(200).json({message: "category deleted sucessfully"})

   } catch (error) {
    next(error)
   }
}

return {
  AddNewCategory,
  viewAllCategories,
  updateCategory,
  deleteCategory
}
}


export default categoryController

