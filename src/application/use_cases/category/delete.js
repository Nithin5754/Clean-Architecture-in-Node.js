import { ERROR } from "../../../frameworks/webserver/middleware/HttpError.js"



const deleteCategoryById=async(id,repository)=>{ 

    
  let isProduct=await repository.findProductsByCategoryId(id)

  if(isProduct?.length>0){
    throw new ERROR.CategoryExistError("category has asscociated product:",isProduct)
  }

  const isCategoryDelete=await repository.deleteCategoryById(id)
  if(!isCategoryDelete){
    throw new ERROR.CategoryNotFoundError("category not found")
  }

  return isCategoryDelete






}


export default deleteCategoryById