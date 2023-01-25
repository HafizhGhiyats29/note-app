import bodyParser from "body-parser";
import express from "express";
import router from "./routes/TodoRoute.js";

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
