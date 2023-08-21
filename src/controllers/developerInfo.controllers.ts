import { Request, Response } from "express";
import { client } from "../database/database";
import { DeveloperInfo } from "../interfaces/developerInfo.interfaces";
import developerInfoServices from "../services/developerInfo.services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const payload: DeveloperInfo = { ...req.body, developerId: req.params.id };

  const developerInfo: DeveloperInfo = await developerInfoServices.create(
    payload
  );
  return res.status(201).json(developerInfo);
};

export default { create };
