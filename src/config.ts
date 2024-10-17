import dotenv from "dotenv";
import path from "path";

const envPath = path.resolve(__dirname, "./configs/.env.development");
dotenv.config({ path: envPath });

export const PORT = process.env.PORT || 3001;
export const MONGODB_URL = process.env.MONGODB_URL || "";
export const PROXY_TARGET_PRODUCT = process.env.PROXY_TARGET_PRODUCT || "";
export const PROXY_TARGET_AUTH = process.env.PROXY_TARGET_AUTH || "";
export const BEST_URL = process.env.BEST_URL || "";

console.log("PORT : ", PORT);
console.log("MONGODB_URL :", MONGODB_URL);
console.log("PROXY_TARGET_PRODUCT : ", PROXY_TARGET_PRODUCT);
console.log("PROXY_TARGET_AUTH : ", PROXY_TARGET_AUTH);
console.log("BEST_URL : ", BEST_URL);
