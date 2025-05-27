import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import Customer from "../typeorm/entities/Customer";
import CustomerRepository from "../typeorm/repositories/CustomerRepository";

interface IRequest{
    id: string;
}
export default class DeleteCustomerService{
    public async execute({id}: IRequest): Promise<void>{
        const customersRepository = getCustomRepository(CustomerRepository);
        const customer = await customersRepository.findById(id);
        if(!customer){
            throw new AppError('Customer not found');
        }
        await customersRepository.remove(customer);
    }
}
