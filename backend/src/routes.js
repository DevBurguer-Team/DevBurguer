import { Router } from 'express';
import multer from 'multer';
import ProductController from './app/controllers/ProductController.js';
import SessionController from './app/controllers/SessionController.js';
import UserController from './app/controllers/UserController.js';
import multerConfig from './config/multer.cjs';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.post('/products', upload.single('file'), ProductController.store);
routes.put(
  '/products/:id', 
  authMiddleware, 
  upload.single('file'), 
  ProductController.update
);
routes.get('/products', ProductController.index);

export default routes;
