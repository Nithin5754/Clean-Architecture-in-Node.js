

const createErrorClass=(name,statusCode)=>{

  return class extends Error {
      constructor(message){
        super(message)
        this.name=name;
        this.statusCode=statusCode
      }
  }

}


export const ERROR={
  HttpError:createErrorClass("HttpError",500),
  CategoryExistError:createErrorClass("categoryExistError",409),
  CategoryNotFoundError:createErrorClass('categoryNotFoundError',404),
  CategoryHasProductsError:createErrorClass("category has product ",409),
  CategoryNotFoundError: createErrorClass('CategoryNotFoundError', 404),
  ProductExistsError:createErrorClass('ProductExistsError',409),
  ProductNotExists:createErrorClass('ProductNotExists',404),
  ProductNotDeleted:createErrorClass("ProductNotDeleted",409),
  UserExistError:createErrorClass("UserExistError",404)
 
}