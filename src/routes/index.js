const {Router} = require("express");

const usersRoutes = require("./users.routes");

const routes = Router();

routes.use("/users", usersRoutes);
// routes.use("rota", (request, response) => {}); // Agora quando a rota for usada, vai ser redirecionada para userRoutes.

module.exports = routes; // Exportando. Todas as rotas da aplicação estão nele.