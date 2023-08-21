import "express-async-errors";
import express, { Application, json } from "express";
import "dotenv/config";
import developerRouter from "./routers/developer.router";
import projectRouter from "./routers/project.router";
import handleError from "./middlewares/handleError.middleware";

const app: Application = express();
app.use(json());

app.use("/developers", developerRouter);
app.use("/projects", projectRouter);

app.use(handleError);

export default app;
