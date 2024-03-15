const express = require("express");
require("dotenv").config();
const orderRouter = require("./Orders/routes/routes");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use("/api/v1/orders", orderRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${port}`);
});
