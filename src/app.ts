import express from "express";

const app: express.Application = express();
const port: number = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ name: "hyeonwoo" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
