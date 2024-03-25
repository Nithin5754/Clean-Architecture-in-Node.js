import { categoryRouter, productRouter, userRouter} from './index.js';

export const routes = (express,app) => {
  // app.use('/api/v1/product', productRouter(express));

  app.use('/api/v1/user',userRouter(express))

  app.use('/api/v1/category', categoryRouter(express));

  app.use('/api/v1/product',productRouter(express))
 
  app.get('/', (req, res) => {
     res.send('This is the router home🏡🏡🏡🏡 page');
   });
}
export default routes