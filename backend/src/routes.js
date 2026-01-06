import { Router } from 'express';
import multer from 'multer';
import ProductController from './app/controllers/ProductController.js';
import SessionController from './app/controllers/SessionController.js';
import UserController from './app/controllers/UserController.js';
import multerConfig from './config/multer.cjs';
import authMiddleware from './app/middlewares/auth.js';
import adminMiddleware from './app/middlewares/admin.js';
import CategoryController from './app/controllers/CategoryController.js';
const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware)
routes.post('/products', adminMiddleware, upload.single('file'), ProductController.store);
routes.post('/products', upload.single('file'), ProductController.store);
routes.put(
  '/products/:id',
  authMiddleware,
  upload.single('file'),
  ProductController.update
);
routes.get('/products', ProductController.index);

// categories 
routes.post('/categories', adminMiddleware, upload.single('file'), CategoryController.store)
routes.put('/categories/:id', adminMiddleware, upload.single('file'), CategoryController.update)
routes.get('/categories', CategoryController.index)



export default routes;
