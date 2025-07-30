import { fileURLToPath } from 'url';
import { dirname } from 'path';
import winston from "winston"

process.loadEnvFile("./.env")

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

const transpConsole2 = new winston.transports.Console(
    {
        level: "debug",
        format: winston.format.combine(
            winston.format.timestamp(),
            // winston.format.colorize(),
            winston.format.simple()
        )
    }
)

export const logger = winston.createLogger(
    {
        transports: [
            // new winston.transports.Console(
            //     {
            //         level: "silly",
            //         format: winston.format.combine(
            //             winston.format.timestamp(),
            //             winston.format.colorize(),
            //             winston.format.simple()
            //         )
            //     }
            // ),
            new winston.transports.File(
                {
                    level: "warn",
                    filename: "./src/logs/errorLogs.log",
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        winston.format.json()
                    )
                }
            )
        ]
    }
)

if(process.env.NODE_ENV!="production"){
    logger.add(transpConsole2)
}

export const middLog = (req, res, next) => {
    req.logger = logger

    next()
}

export const logger2=winston.createLogger(
    {
        levels: {
            grave: 0, 
            intermedio: 1, 
            leve: 2, 
            info: 3
        },
        transports:[
            new winston.transports.Console({
                level: "leve", 
                format: winston.format.combine(
                    winston.format.timestamp(), 
                    winston.format.colorize(
                        {
                            colors: {grave: "red", intermedio: "yellow", leve:"green", info: "blue"}
                        } 
                    ),
                    winston.format.simple()
                )
            })
        ]
    }
)