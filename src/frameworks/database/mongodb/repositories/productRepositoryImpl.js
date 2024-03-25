
import Product from '../models/products.js'



const productRepositoryImpl=()=>{

  const findAllProducts=async()=>await Product.find()


const addNewProduct=async(productEntity)=>{
    
  const products= new Product(productEntity)
  const newProducts=products.save()
  return newProducts
}

const findProductByName =async(title)=>{

  return await Product.findOne({title})
}

const findProductById=async(id)=>{
  return await Product.findById(id)
}

const updateProductHandler=async(id,name,price,category)=>{
const isUpdateProduct=await Product.findByIdAndUpdate(id,{
  title:name,price,category
})

return isUpdateProduct

}

const deletingProduct=async(id)=>{
  const isDeleted=await Product.findByIdAndDelete(id)
  return isDeleted 
}

return {
  addNewProduct,
  findProductByName,
  findAllProducts,
  findProductById,
  updateProductHandler,
  deletingProduct
}

}


export default productRepositoryImpl