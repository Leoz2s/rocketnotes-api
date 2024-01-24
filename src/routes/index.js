const {Router} = require("express");

const usersRoutes = require("./users.routes");
const notesRoutes = require("./notes.routes");

const routes = Router();

// routes.use("rota", (request, response) => {}); // Agora quando a rota for usada, vai ser redirecionada para userRoutes.
routes.use("/users", usersRoutes);
routes.use("/notes", notesRoutes);

module.exports = routes; // Exportando. Todas as rotas da aplicação estão nele.