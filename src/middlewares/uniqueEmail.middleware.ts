import { NextFunction, Request, Response } from "express";
import { DeveloperResult } from "../interfaces/developer.interfaces";
import { client } from "../database/database";
import AppError from "../errors";

export const uniqueEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;
  if (!email) return next();

  const query: DeveloperResult = await client.query(
    'SELECT * FROM "developers" WHERE "email" = $1;',
    [email]
  );

  if (query.rowCount) {
    throw new AppError("Email already exists.", 409);
  }

  return next();
};
