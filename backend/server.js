const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app.js");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION: Shutting down");
  console.log(err.name, err.message);
});

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database Connected Successfully"));

const port = process.env.PORT || 9000;
const server = app.listen(port, () => {
  console.log(`Listing to port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("SIGTERM RECIEVED. shutting down");
  server.close(() => {
    console.log("Process terminated");
  });
});
