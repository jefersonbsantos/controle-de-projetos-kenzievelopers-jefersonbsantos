import { Router } from "express";
import developerControllers from "../controllers/developer.controllers";
import { uniqueEmail } from "../middlewares/uniqueEmail.middleware";
import { idExists } from "../middlewares/developerIdExists.middleware";
import developerInfoServices from "../services/developerInfo.services";
import { infoExists } from "../middlewares/developerInfoExists.middleware";

const developerRouter: Router = Router();

developerRouter.post("", uniqueEmail, developerControllers.create);

developerRouter.use("/:id", idExists);

developerRouter.get("/:id", developerControllers.retrieve);
developerRouter.patch("/:id", uniqueEmail, developerControllers.partialUpdate);
developerRouter.delete("/:id", developerControllers.deleteDeveloper);

developerRouter.post("/:id/infos", infoExists, developerInfoServices.create);

export default developerRouter;
