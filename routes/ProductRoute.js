import express from 'express';
import { upload } from '../middleware.js';
import {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProduct
} from "../controller/ProductController.js";

const router = express.Router();

router.get('/products', getProduct);
router.get('/product/:id', getProductById);
router.post('/products', upload, createProduct);
router.post('/product/:id', upload, updateProduct);
router.delete('/product/:id', deleteProduct);
router.get('/search', searchProduct)

export default router;