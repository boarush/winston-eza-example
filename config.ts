import { createConfig } from "express-zod-api";
import winston from "winston";

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        })
    ]
});

export const config = createConfig({
    server: {
        listen: 8090,
    },
    startupLogo: false,
    cors: true,
    logger: logger,
    childLoggerProvider: ({ parent }) => {
        // return logger.child({ requestId: Math.random() * 100000 });
        return parent.child({ requestId: Math.random() * 100000 });
    }
})

declare module "express-zod-api" {
    interface LoggerOverrides extends winston.Logger {}
}