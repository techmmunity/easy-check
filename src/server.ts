import express from "express";

import Router from "./routes";

class App {
  public express: express.Express;

  public constructor() {
    this.express = express();

    // MiddleWares
    this.middewares();

    // Routes
    new Router(this.express);

    // Start Server
    this.express.listen(8080);
  }

  private middewares() {
    this.express.use(express.json());

    // Set CORS headers
    this.express.use((req, res, next) => {
      res.header("Access-Control-Allow-Credentials", "true");
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, Content-Length, X-Requested-With"
      );

      next();
    });
  }
}

new App();
