import { z } from "zod";
import { defaultFactory } from "./factory";

export const status = defaultFactory.build({
    input: z.object({}),
    output: z.object({
        message: z.string(),
    }),
    method: "get",
    handler: async ({ logger }) => {
        logger.info("HELLOOOOOO");
        return {
            message: "OK"
        }
    }
})