import { NextFunction, Request, Response } from "express";
import { client } from "../database/database";
import AppError from "../errors";
import { ProjectResult } from "../interfaces/projects.interfaces";

export const projectIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id = req.params.id;

  const query: ProjectResult = await client.query(
    'SELECT * FROM "developers" WHERE "id" = $1;',
    [id]
  );

  if (!query.rowCount) {
    throw new AppError("Project not found.", 404);
  }

  return next();
};
