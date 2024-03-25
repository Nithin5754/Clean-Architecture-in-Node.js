import { ERROR } from "../../../frameworks/webserver/middleware/HttpError.js"




const findAll=async(productRepository)=>{
    const productList=await productRepository.findAllProducts()  
    if(productList.length==0){
      throw new ERROR.ProductNotExists("currently products are not listed")
    }

  return productList
}

export default findAll  