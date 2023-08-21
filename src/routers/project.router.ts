import { Router } from "express";
import projectControllers from "../controllers/project.controllers";
import { idExists } from "../middlewares/developerIdExists.middleware";
import { projectIdExists } from "../middlewares/projectIdExists.middleware";

const projectRouter: Router = Router();

projectRouter.post("", idExists, projectControllers.create);

projectRouter.use("/:id", projectIdExists);

projectRouter.get("/:id", projectControllers.retrieve);
projectRouter.patch("/:id", idExists, projectControllers.partialUpdate);

export default projectRouter;
