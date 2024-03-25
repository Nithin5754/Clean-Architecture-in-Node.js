import addNewProduct from "../../application/use_cases/products/create.js"
import deleteProduct from "../../application/use_cases/products/delete.js"
import findAll from "../../application/use_cases/products/findAll.js"
import updateProduct from "../../application/use_cases/products/update.js"





const productController=(productRepositoryInt,productRepositoryImpl,categoryRepositoryInt,categoryRepositoryImpl)=>{

  const productRepository=productRepositoryInt(productRepositoryImpl())

    const categoryRepository=categoryRepositoryInt(categoryRepositoryImpl())
     
const createProducts=async (req,res,next)=>{
  try {
    const {title,price,categoryId}=req.body
    const newProducts=await addNewProduct(title,price,categoryId,productRepository,categoryRepository)
    res.status(201).json(newProducts)

  } catch (error) {
    next(error)
  }
}


const listAllProduct=async(req,res,next)=>{
  try {
    const allProducts=await findAll(productRepository)
    res.json(allProducts)
    
  } catch (error) {
    next(error)
  }
}


const updateProductHandler=async(req,res,next)=>{

    try {
      const {name,price,category}=req.body
      const id=req.params.id
      const updatedProduct=await updateProduct(id,name,price,category,productRepository,categoryRepository)
   res.status(200).json(updatedProduct)

    } catch (error) {
      next(error)  
    }
}

const deleteProductHandler=async(req,res,next)=>{
  try {
    const id=req.params.id 
   await deleteProduct(id,productRepository)
   res.status(200).json({message:"product deleted"})
    
  } catch (error) {
    next(error)
  }
}

return {
  createProducts,
  listAllProduct,
  updateProductHandler,
  deleteProductHandler
}

}


export default productController


