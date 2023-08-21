import { NextFunction, Request, Response } from "express";
import { DeveloperResult } from "../interfaces/developer.interfaces";
import { client } from "../database/database";
import AppError from "../errors";

export const idExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (req.method === "PATCH" && !req.body.developerId) {
    return next();
  }

  const id: string | number = req.params.developerId || req.params.id;

  const query: DeveloperResult = await client.query(
    'SELECT * FROM "developers" WHERE "id" = $1;',
    [id]
  );

  if (!query.rowCount) {
    throw new AppError("Developer not found.", 404);
  }

  return next();
};
