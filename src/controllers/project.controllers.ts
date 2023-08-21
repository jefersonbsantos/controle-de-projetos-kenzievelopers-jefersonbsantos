import { Request, Response } from "express";
import { Project } from "../interfaces/projects.interfaces";
import projectServices from "../services/project.services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const project: Project = await projectServices.create(req.body);
  return res.status(201).json(project);
};

const partialUpdate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const project: Project = await projectServices.partialUpdate(
    req.body,
    req.params.id
  );
  return res.status(200).json(project);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const project: Project = await projectServices.retrieve(req.params.id);
  return res.status(200).json(project);
};

export default { create, partialUpdate, retrieve };
