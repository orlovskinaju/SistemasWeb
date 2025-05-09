import { NextFunction, Request, Response } from "express";
import ListUserService from "../services/ListUserService";
import CreateUserService from "../services/CreateUserService";



export default class UsersController {

    public async index(request: Request, respose:Response, next: NextFunction): Promise<Response|void> {
        try{
            const listUser = new ListUserService();
            console.log(request.user.id);
            const users = await listUser.execute();
            return respose.json(users);
        }catch (err) {
            next(err);
         }
    }


    public async create(request: Request, respose:Response, next: NextFunction): Promise<Response|void> {
        try{
            const { name, email, password } = request.body;
            const createUser = new CreateUserService();
            const user = await createUser.execute({ name, email, password });
            return respose.json(user);
        }catch (err) {
            next(err);
         }
    }
    
}