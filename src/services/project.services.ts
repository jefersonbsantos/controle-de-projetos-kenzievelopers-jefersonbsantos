import format from "pg-format";
import { client } from "../database/database";
import {
  Project,
  ProjectCreate,
  ProjectResult,
  ProjectUpdate,
} from "../interfaces/projects.interfaces";

const create = async (payload: ProjectCreate): Promise<Project> => {
  const queryFormat: string = format(
    'INSERT INTO "projects" (%I) VALUES (%L) RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  );

  const query: ProjectResult = await client.query(queryFormat);

  return query.rows[0];
};

const partialUpdate = async (
  payload: ProjectUpdate,
  developerId: string
): Promise<Project> => {
  const queryFormat: string = format(
    'UPDATE "projects" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  );

  const query: ProjectResult = await client.query(queryFormat, [developerId]);

  return query.rows[0];
};

const retrieve = async (projectId: string): Promise<Project> => {
  const queryString: string = `
    	SELECT 
        p.id,
        p.name,
        p.description,
        p.repository,
        p."startDate",
        p."endDate"
        d.name
      FROM developers d
      LEFT JOIN projects p
        ON d."id" = p."developerId" 
      WHERE p.id = $1;
  `;

  const query: ProjectResult = await client.query(queryString, [projectId]);

  return query.rows[0];
};

export default { create, partialUpdate, retrieve };
