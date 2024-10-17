import express from "express";
import setupProxy from "./middleware/proxyMiddleware";
import { PORT } from "./config";

const app = express();

// Set up the proxy middleware
setupProxy(app);

// Start the API Proxy server on port 4000
app.listen(PORT, () => {
  console.log(`API Proxy server running on http://localhost:${PORT}`);
});
