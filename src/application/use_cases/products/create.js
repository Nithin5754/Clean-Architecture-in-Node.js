

import ProductEntity from "../../../enities/products.js";
import { ERROR } from "../../../frameworks/webserver/middleware/HttpError.js";


const addNewProduct=async(title,price,categoryId,productRepository,categoryRepository)=>{


  const existingCategory=await categoryRepository.findCategoryById(categoryId)

  if(!existingCategory){
    throw new ERROR.CategoryNotFoundError('CATEGORY WITH ID :-',categoryId,"is not found")
  }

  const existingProduct=await productRepository.findProductByName(title)

  if(existingProduct){
    throw new ERROR.ProductExistsError('product id ',title,"is already exist")
  }

  const productEntity=new ProductEntity(title,price,categoryId)
  const newProduct=await productRepository.addNewProduct(productEntity)

  await categoryRepository.addProductToCategory(categoryId,newProduct._id)
  
  
  return newProduct

}


export default addNewProduct