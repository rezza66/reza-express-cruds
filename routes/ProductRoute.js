import express from 'express';
import { upload } from '../middleware.js';
import {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controller/ProductController.js";

const router = express.Router();

router.get('/products', getProduct);
router.get('/product/:id', getProductById);
router.post('/products', upload, createProduct);
router.post('/product/:id', upload, updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;