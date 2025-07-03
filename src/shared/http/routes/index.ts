import { Router } from "express";
import filmesRouter from '@modules/filmes/routes/filmes.routes';
import atoresRouter from "@modules/atores/routes/atores.routes";
import usersRouter from "@modules/users/routes/users.routes";
import sessionsRouter from "@modules/users/routes/sessions.routes";
import passwordRouter from "@modules/users/routes/password.routes";
import profileRouter from "@modules/users/routes/profile.routes";

const routes = Router();
routes.use('/filmes', filmesRouter);
routes.use('/atores', atoresRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter); 

export default routes;
