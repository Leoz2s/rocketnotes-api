require("express-async-errors");

const AppError = require("./utils/AppError");

const express = require("express"); // Import

// const usersRoutes = require("./routes/users.routes");
const routes = require("./routes")

const app = express(); // Initialize
app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  };

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const PORT = 3333; // Define Port
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); // When the application starts, execute function