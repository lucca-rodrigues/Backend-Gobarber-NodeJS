import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ message: 'hello World!' }));

export default routes;
