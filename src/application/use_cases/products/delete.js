import { ERROR } from "../../../frameworks/webserver/middleware/HttpError.js"



const deleteProduct=async(id,productRepository)=>{
 const isProductExisting=await productRepository.findProductById(id)

 if(!isProductExisting){
  throw new ERROR.ProductNotExists("product not yet listed")
 }
   const deleted=await productRepository.deletingProduct(id)
     
   if(!deleted){
    throw new ERROR.ProductNotDeleted("error in deleteing product")
   }
   return deleted
}

export default deleteProduct