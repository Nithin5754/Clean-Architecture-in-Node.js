


import Category from "../models/category.js";
import Product from "../models/products.js";



const categoryRepositoryImpl=()=>{


  const viewAllCategory=async()=>{
    const categories=await Category.find()
  
    return categories
  }

 
  const findCategoryByName=async(name)=>{
    const existingCategory=await Category.findOne({name})
    return existingCategory
  }

  const findCategoryById=async(id)=>{
    const existingCategory=await Category.findById(id)
    return existingCategory
  }

  const addNewCategory=async (categoryEntity)=>{
    const category=new Category(categoryEntity)
    const newCategory=await category.save();
    return newCategory
    
  }

  const updateCategory=async (id,name)=>{
    console.log(id,name);
    const updatedCategory=await Category.findByIdAndUpdate(id,{name})
    console.log(updatedCategory,"hello");
      return updatedCategory
  }

  const deleteCategoryById=async(id)=>{
    const isDeleted=await Category.findByIdAndDelete(id)
    return isDeleted
  }

  const viewALLproductsByCategory=async (id)=>{
    const products=await Product.find({category:id})
    return products
  }

  const addProductToCategory=async(categoryId, productId) =>{
     const category=await Category.findById(categoryId)
     if(!category){
      throw new Error("CATEGORY NOT FOUND")
     }

     category.products.push(productId)
     await category.save()
  }


  return {findCategoryByName,
    addNewCategory,
    viewAllCategory,
    updateCategory,
    deleteCategoryById,
    findCategoryById,
    viewALLproductsByCategory,
    addProductToCategory

  }

}

export default categoryRepositoryImpl

