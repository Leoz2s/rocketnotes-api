const {Router} = require("express");

const usersRoutes = require("./users.routes");
const sessionsRoutes = require("./sessions.routes");
const notesRoutes = require("./notes.routes");
const tagsRoutes = require("./tags.routes");

const routes = Router();

// routes.use("rota", (request, response) => {}); // Agora quando a rota for usada, vai ser redirecionada para userRoutes.
routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/notes", notesRoutes);
routes.use("/tags", tagsRoutes);

module.exports = routes; // Exportando todas as rotas da aplicação.