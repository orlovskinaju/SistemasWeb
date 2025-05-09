import User from "@modules/users/typeorm/entities/User";
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import UserRepository from "../typeorm/repositories/UserRepository";
import auth from "@config/auth";

interface IRequest{
  email: string;
  password: string;
}

interface IResponse{
  user: User;
  token: string;
}

export default class CreateSessionsService{
  public async execute({email, password}: IRequest) : Promise<IResponse>{
    const usersRepository = getCustomRepository(UserRepository);
    const user  = await usersRepository.findByEmail(email);
    if(!user){
      throw new AppError('Incorrect email/password combination.', 401);
    }

    //compare método pronto do bcrypt.
    const passwordConfirmed = await compare(password, user.password);
    if(!passwordConfirmed){
      throw new AppError('Incorrect email/passowrd combination.', 401);
    }

    //método do sign do jwt
    const token = sign({}, auth.jwt.secret,{
      subject: user.id,
      expiresIn: '1d'
    } );

    return {user, token};
  }
}
