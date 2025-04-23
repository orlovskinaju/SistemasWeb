import { Router } from "express";
import ProductController from "../controllers/ProductsController";

const productsRouter = Router();
const productsController = new ProductController();

productsRouter.get('/', async(req, res, next) =>{
    try{
        await productsController.index(req, res, next);
    }catch(err){
        next(err)
    }
});

productsRouter.get('/:id', async(req, res, next) =>{
    try{
        await productsController.show(req, res, next);
    }catch(err){
        next(err)
    }
});

productsRouter.post('/', async(req, res, next) =>{
    try{
        await productsController.create(req, res, next);
    }catch(err){
        next(err)
    }
});

productsRouter.put('/:id', async(req, res, next) =>{
    try{
        await productsController.update(req, res, next);
    }catch(err){
        next(err)
    }
});

productsRouter.delete('/:id', async(req, res, next) =>{
    try{
        await productsController.update(req, res, next);
    }catch(err){
        next(err)
    }
});

export default productsRouter;