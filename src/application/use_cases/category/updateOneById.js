import { ERROR } from "../../../frameworks/webserver/middleware/HttpError.js"


const updateOneById=async(id,name,repository)=>{
    
     let existingCategory=await repository.updateCategory(id,name)
     if(!existingCategory)throw new ERROR.CategoryExistError('you were trying to update category not exists')

     return existingCategory
}

export default updateOneById