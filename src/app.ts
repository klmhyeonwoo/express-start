import express from "express";

const app: express.Application = express();
const port: number = 8000;

// * logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is middleware");
  next();
});

// * 404 middleware
app.use((req, res, next) => {
  console.log("this is error middelware");
  res.send({ error: "404 Not Found Error " });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
