import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import path from "path";
import fs from "fs";
import uploadConfig from "@config/upload";
import AppError from "@shared/errors/AppError";
import UserRepository from "../typeorm/repositories/UserRepository";



interface IRequest{
    user_id: string;
    avatarFilename: string;
}

export default class UpdateUserAvatarService {
    public async execute({ user_id, avatarFilename }: IRequest): Promise<User> {
        const usersRepository = getCustomRepository(UserRepository);
        const user = await usersRepository.findById(user_id);
        if (!user) {
            throw new AppError('Only authenticated users can change avatar.');
        }
        if (user.avatar) {
            const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
            const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);
            if (userAvatarFileExists) {
                await fs.promises.unlink(userAvatarFilePath);
            }
        }
        user.avatar = avatarFilename;
        await usersRepository.save(user);
        return user;
    }

}