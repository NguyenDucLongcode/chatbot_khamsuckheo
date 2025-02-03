import express from "express";
import "dotenv/config";
import configViewEngine from "./configs/viewEngine";
import bodyParser from "body-parser";
import webRouter from "./routers/web";

const app = express();
const port = process.env.PORT || 3000;

// config bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config ejs
configViewEngine(app);

// use router
app.use("/", webRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
