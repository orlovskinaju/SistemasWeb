import 'reflect-metadata';
import express, { NextFunction, Request, request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from 'shared/errors/AppError';
import '@shared/typeorm';

const app=express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use((error: Error, request:Request, response:Response, next: NextFunction) : void => {
    if(error instanceof AppError){
         response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        });
    }
     response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });

} );

app.listen(3333, () => {
    console.log('Server is running on port 3333');
});

