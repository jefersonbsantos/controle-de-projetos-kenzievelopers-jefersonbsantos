import { NextFunction, Request, Response } from "express";
import { DeveloperResult } from "../interfaces/developer.interfaces";
import { client } from "../database/database";
import AppError from "../errors";
import { DeveloperInfoResult } from "../interfaces/developerInfo.interfaces";

export const infoExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const query: DeveloperInfoResult = await client.query(
    'SELECT * FROM "developerInfo" WHERE "developerId" = $1;',
    [req.params.id]
  );

  if (query.rowCount) {
    throw new AppError("Developer infos already exists.", 409);
  }

  return next();
};
