const express = require("express"); // Import

const app = express(); // Initialize

app.get("/message", (request, response) => {
  response.send("Hello World!");
});

const PORT = 3333; // Define Port
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); // When the application starts, execute function