import { Router } from "express";

const routes = Router();

routes.get('/', (request,response)=> {
    Response.json({message: 'Hello, Naju!'});
    return;
});

export default routes;