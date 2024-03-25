


const categoryRepositoryInt=(repository)=>{
  const viewAllCategory=()=>{
  return repository.viewAllCategory()
  }

  const findCategoryByName=(name)=>repository.findCategoryByName(name)

  const findCategoryById=(id)=>repository.findCategoryById(id)

   const addNewCategory=(categoryEntity)=>{
     return repository.addNewCategory(categoryEntity)
   }

   const updateCategory=(id,name)=>repository.updateCategory(id,name)

   const deleteCategoryById=(id)=>repository.deleteCategoryById(id)
   const findProductsByCategoryId=(id)=>repository.viewALLproductsByCategory(id)

   const  addProductToCategory=(categoryId,productId)=>repository.addProductToCategory(categoryId,productId)
return {
  findCategoryByName,
  addNewCategory,
  viewAllCategory,
  updateCategory,
  deleteCategoryById,
  findCategoryById,
  findProductsByCategoryId,
  addProductToCategory
}
}


export default categoryRepositoryInt