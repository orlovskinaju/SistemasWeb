import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import Customer from "../typeorm/entities/Customer";
import CustomerRepository from "../typeorm/repositories/CustomerRepository";

interface IRequest{
    id: string;
    name: string;
    email: string;
}

export default class UpdateCustomerService{
    public async execute({id, name, email}: IRequest): Promise<Customer>{
        const customersRepository = getCustomRepository(CustomerRepository);
        const customer = await customersRepository.findById(id);
        if(!customer){
            throw new AppError("Customer not found");
        }
        const customerExists = await customersRepository.findByEmail(email);
        if(customerExists && customerExists.id !== id){
            throw new AppError("Email address already used");
        }
        customer.name = name;
        customer.email = email;
        await customersRepository.save(customer);
        return customer;
    }
}