import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import AppError from "@shared/errors/AppError";
import UsersRepository from "../typeorm/repositories/UserRepository";

interface IRequest{
    user_id: string;
}

export default class ShowProfileService{
    public async execute({user_id}) : Promise<User>{
        const userRepository = getCustomRepository(UsersRepository);
        const user = await userRepository.findById(user_id);
        if(!user){
            throw new AppError('User not found');
        }
        return user;
    }
}