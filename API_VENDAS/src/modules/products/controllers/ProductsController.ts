import {Request, Response, NextFunction } from "express";
import ListProductService from "../services/ListProductService";
import ShowProductService from "../services/ListProductService";
import CreateProductService from "../services/CreateProductService";
import UpdateProductService from "../services/UpdateProductService";
import DeleteProductService from "../services/DeleteProductService";

export default class ProductController{
    public async index(request: Request, response: Response, next: NextFunction): Promise<Response | void>{

        try{
            const listProducts = new ListProductService();
            const products = await listProducts.execute();
            return response.json(products);
        } catch(err){
            next(err);
        }
    }

    public async show(request: Request, response: Response, next: NextFunction): Promise<Response | void>{

        try{
            const {id} = request.params;
            const showProduct = new ShowProductService();
            const product = await showProduct.execute({id});
            return response.json(product);
        } catch(err){
            next(err);
        }
    }

    public async create(request: Request, response: Response, next: NextFunction): Promise<Response | void>{

        try{
            const{name, price, quantity} = request.body;
            const CreateProduct = new CreateProductService();
            const product = await CreateProduct.execute({name, price, quantity});
            return response.json(product);
        } catch(err){
            next(err);
        }
    }

    public async update(request: Request, response: Response, next: NextFunction): Promise<Response | void>{

        try{
            const { id } = request.params;
            const{name, price, quantity} = request.body;
            const UpdateProduct = new UpdateProductService();
            const product = await UpdateProduct.execute({id, name, price, quantity});
            return response.json(product);
        } catch(err){
            next(err);
        }
    }

    public async delet(request: Request, response: Response, next: NextFunction): Promise<Response | void>{

        try{
            const{id} = request.params;
            const deleteProduct = new DeleteProductService();
            await deleteProduct.execute({id});
            return response.json([]);
        } catch(err){
            next(err);
        }
    }
}