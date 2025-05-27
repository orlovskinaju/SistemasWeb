import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import Customer from "../typeorm/entities/Customer";
import CustomerRepository from "../typeorm/repositories/CustomerRepository";

interface IRequest{
    id: string;
}
export default class ShowCustomerService{
    public async execute({id}: IRequest): Promise<Customer>{
        const customersRepository = getCustomRepository(CustomerRepository);
        const customer = await customersRepository.findById(id);
        if(!customer){
            throw new AppError('Customer not found');
        }
        return customer;
    }
}
