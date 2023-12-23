const {Router} = require("express");

const usersRoutes = Router();

// {
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

usersRoutes.post("/", (request, response) => {
  const {name, email, password} = request.body;

  // response.send(`Name: ${name}. E-mail: ${email}. Password: ${password}.`);
  response.json({name, email, password});
});

module.exports = usersRoutes;