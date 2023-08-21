import { QueryResult } from "pg";

type Developer = {
  id: number;
  name: string;
  email: string;
};

type DeveloperCreate = Omit<Developer, "id">;
type DeveloperUpdate = Partial<DeveloperCreate>;
type DeveloperRead = Array<Developer>;
type DeveloperResult = QueryResult<Developer>;

export {
  Developer,
  DeveloperUpdate,
  DeveloperRead,
  DeveloperCreate,
  DeveloperResult,
};
