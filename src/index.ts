import express from "express";

import routers from "./routes";

const app = express();

app.use(express.json());

const port = process.env.PORT || 8080;

app.use("/api/v1", routers);

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

export default app;
