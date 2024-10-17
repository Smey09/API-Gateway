import { Express } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const setupProxy = (app: Express) => {
  // Proxy for Product service
  app.use(
    "/api/v1/products",
    createProxyMiddleware({
      target: "http://host.docker.internal:3000/v1/products", // Change localhost to host.docker.internal
      changeOrigin: true,
    })
  );

  // Proxy for Auth service
  app.use(
    "/api/v1/auth",
    createProxyMiddleware({
      target: "http://host.docker.internal:3000/v1/auth/google", // Change localhost to host.docker.internal
      changeOrigin: true,
    })
  );
};

export default setupProxy;
