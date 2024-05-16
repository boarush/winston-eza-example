import { createServer } from "express-zod-api";
import { routing } from "./routing";
import { config } from "./config";

await createServer(config, routing);