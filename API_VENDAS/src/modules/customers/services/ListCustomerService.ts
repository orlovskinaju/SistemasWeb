import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import Customer from "../typeorm/entities/Customer";
import CustomerRepository from "../typeorm/repositories/CustomerRepository";


export default class ListCustomerService{
    public async execute(): Promise<Customer[]>{
        const customersRepository = getCustomRepository(CustomerRepository);
        const customers = await customersRepository.find();
        return customers;
    }
}