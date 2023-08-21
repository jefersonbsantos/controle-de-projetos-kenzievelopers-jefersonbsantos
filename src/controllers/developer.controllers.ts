import { Request, Response } from "express";
import { Developer } from "../interfaces/developer.interfaces";
import developerServices from "../services/developer.services";
import { client } from "../database/database";

const create = async (req: Request, res: Response): Promise<Response> => {
  const developer: Developer = await developerServices.create(req.body);
  return res.status(201).json(developer);
};

const partialUpdate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const developer: Developer = await developerServices.partialUpdate(
    req.body,
    req.params.id
  );
  return res.status(200).json(developer);
};

const deleteDeveloper = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await developerServices.deleteDeveloper(req.params.id);
  return res.status(204).json();
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const developer: Developer = await developerServices.retrieve(req.params.id);
  return res.status(200).json(developer);
};

export default { create, partialUpdate, deleteDeveloper, retrieve };
