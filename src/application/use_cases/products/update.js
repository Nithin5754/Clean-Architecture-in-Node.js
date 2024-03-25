import { ERROR } from "../../../frameworks/webserver/middleware/HttpError.js"





const updateProduct=async(id,name,price,category,productRepository,categoryRepository)=>{

  const isProductExisting=await productRepository.findProductById(id)

  if(!isProductExisting){
     throw new ERROR.ProductNotExists('product not yet listed please check again')
  }
     
  const isUpdated=await productRepository.updateProductHandler(id,name,price,category)

  return isUpdated

}


export default updateProduct