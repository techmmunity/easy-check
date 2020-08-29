import { Express } from "express";

import userRoutes from "./User";

class Router {
  constructor(server: Express) {
    server.get("/", async (req, res) =>
      res.json({
        "/user/websites": "Os websites de todos os usuários",
        "/user/info": "O nome, email e a empresa ",
      })
    );

    server.use("/user", userRoutes);
  }
}

export default Router;
