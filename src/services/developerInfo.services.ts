import format from "pg-format";
import {
  DeveloperInfo,
  DeveloperInfoCreate,
  DeveloperInfoResult,
} from "../interfaces/developerInfo.interfaces";
import { client } from "../database/database";

const create = async (payload: DeveloperInfoCreate): Promise<DeveloperInfo> => {
  const queryFormat: string = format(
    'INSERT INTO "developersInfo" (%I) VALUES (%L) RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  );

  const query: DeveloperInfoResult = await client.query(queryFormat);

  return query.rows[0];
};

export default { create };
