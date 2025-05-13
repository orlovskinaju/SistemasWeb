import { NextFunction, Request, Response } from "express";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";

export default class UserAvatarController {
    public async update(request: Request, resposnse: Response, next: NextFunction): Promise<Response> {
        try{
            const updateUserAvatarService = new UpdateUserAvatarService();
            const user = updateUserAvatarService.execute({
                user_id: request.user.id,
                avatarFilename: request.file?.filename as string ,});
            return resposnse.json(user);
        }catch (err) {
            next(err);
        }
    }
}