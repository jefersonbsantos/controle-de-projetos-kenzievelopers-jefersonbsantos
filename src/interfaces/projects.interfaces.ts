import { QueryResult } from "pg";

type Project = {
  id: number;
  name: string;
  description: string;
  repository: string;
  startDate: Date;
  endDate?: Date | null | undefined;
  developerId: number;
};

type ProjectCreate = Omit<Project, "id">;
type ProjectUpdate = Partial<ProjectCreate>;
type ProjectResult = QueryResult<Project>;

export { Project, ProjectCreate, ProjectUpdate, ProjectResult };
