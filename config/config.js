import dotenv from "dotenv";

dotenv.config();

export const dbUrl = process.env.DATABASE_URL;
export const port = process.env.PORT;
export const jwt_secret_key = process.env.JWR_SECRET_KEY
