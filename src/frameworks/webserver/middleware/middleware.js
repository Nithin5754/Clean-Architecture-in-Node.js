

const errorMiddleware=(err,req,res,next)=>{
  console.log(err);
  const statusCode=err.statusCode||500;
  const message=err.message||'internal server error'
  res.status(statusCode).json({message});
}

export default errorMiddleware