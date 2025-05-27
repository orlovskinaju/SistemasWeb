import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import Customer from "../typeorm/entities/Customer";
import CustomerRepository from "../typeorm/repositories/CustomerRepository";
import { cp } from "fs";

interface IRequest{
    name: string;
    email: string;
}

export default class CreateCustomerService{
    public async execute({name, email}: IRequest): Promise<Customer>{
        const customersRepository = getCustomRepository(CustomerRepository);
        const emailExists = await customersRepository.findByEmail(email);
        if(emailExists){
            throw new AppError("Email address already used");
        }
        const customer = customersRepository.create({
            name,
            email,
        });
        await customersRepository.save(customer);
        return customer;
    }
}