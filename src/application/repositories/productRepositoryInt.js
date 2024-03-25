

const productRepositoryInt=(repository)=>{

  const findAllProducts=()=>repository.findAllProducts()



  const addNewProduct=(productEntity)=>{
    return repository.addNewProduct(productEntity)
  }

  const findProductByName=(title)=>repository.findProductByName(title)

  const findProductById=(id)=>repository.findProductById(id)

const updateProductHandler=(id,name,price,category)=>repository.updateProductHandler(id,name,price,category)
const deletingProduct=(id)=>repository.deletingProduct(id)

  return{
    addNewProduct,
    findProductByName,
    findAllProducts,
    findProductById,
    updateProductHandler,
    deletingProduct
 
  }
}

export default productRepositoryInt