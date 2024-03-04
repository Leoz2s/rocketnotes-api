const {Router} = require("express");

const UsersController = require("../controllers/UsersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

const usersController = new UsersController;

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);

module.exports = usersRoutes;

// { Examples - middleware and routes
    // Example of middleware:
// function myMiddleware(request, response, next) {
//   console.log("You passed through the Middleware!");

//   if(!request.body.isAdmin){
//     return response.json({message: "user unauthorized"});
//   };

//   next();
// };

// // Using the middleware for all routes:
// // usersRoutes.use(myMiddleware);

// // Using for specific routes example:
// // usersRoutes.post("/", myMiddleware, usersController.create);
// }

// { Examples of routes:
// // usersRoutes.get("/message/:id/:user", (request, response) => {
// //   const {id, user} = request.params

// //   response.send(
// //     `Message ID: ${id}.
// //      For the user: ${user}.
// //     `);
// // });

// // usersRoutes.get("/users", (request, response) => {
// //   const {page, limit} = request.query;
  
// //   response.send(`Page: ${page}. Limit: ${limit}.`);
// // });
// }
