import format from "pg-format";
import {
  Developer,
  DeveloperCreate,
  DeveloperResult,
  DeveloperUpdate,
} from "../interfaces/developer.interfaces";
import { client } from "../database/database";

const create = async (payload: DeveloperCreate): Promise<Developer> => {
  const queryFormat: string = format(
    'INSERT INTO "developers" (%I) VALUES (%L) RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  );

  const query: DeveloperResult = await client.query(queryFormat);

  return query.rows[0];
};

const partialUpdate = async (
  payload: DeveloperUpdate,
  developerId: string
): Promise<Developer> => {
  const queryFormat: string = format(
    'UPDATE "developers" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  );

  const query: DeveloperResult = await client.query(queryFormat, [developerId]);

  return query.rows[0];
};

const deleteDeveloper = async (developerId: string): Promise<void> => {
  await client.query('DELETE FROM "developers" WHERE "id" = $1;', [
    developerId,
  ]);
};

const retrieve = async (developerId: string): Promise<Developer> => {
  const queryString: string = `
    	SELECT 
        d.id,
        d.name,
        d.email,
        i.developerSince,
        i.preferredOS
      FROM developers d
      LEFT JOIN developersInfo i
        ON d."id" = i."developerId";  
      WHERE i.id = $1  
  `;

  const query: DeveloperResult = await client.query(queryString, [developerId]);

  return query.rows[0];
};

export default { create, partialUpdate, deleteDeveloper, retrieve };
