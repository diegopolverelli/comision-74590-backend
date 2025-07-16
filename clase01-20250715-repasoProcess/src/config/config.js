// process.loadEnvFile("./.env")
import dotenv from "dotenv"

dotenv.config({
    path: "./.env.prod", 
    override: true,
    quiet: true
})

export const config={
    PORT: process.env.PORT || 3009, 
    MONGO_URL: process.env.MONGO_URL, 
    SECRET: process.env.SECRET, 
    DB_NAME: process.env.DB_NAME
}