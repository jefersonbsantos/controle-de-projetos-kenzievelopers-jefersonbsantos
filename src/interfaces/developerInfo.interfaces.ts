import { QueryResult } from "pg";

type OS = "Windows" | "Linux" | "MacOS";

type DeveloperInfo = {
  id: number;
  developerSince: Date;
  preferredOS: OS;
  developerId: number;
};

type DeveloperInfoCreate = Omit<DeveloperInfo, "id">;
type DeveloperInfoUpdate = Partial<DeveloperInfoCreate>;
type DeveloperInfoResult = QueryResult<DeveloperInfo>;

export {
  DeveloperInfo,
  DeveloperInfoResult,
  DeveloperInfoCreate,
  DeveloperInfoUpdate,
};
