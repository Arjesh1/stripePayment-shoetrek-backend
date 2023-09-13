import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import paymentRouter from "./routers/paymentRouter.js";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors({ origin: "https://shoe-trek.vercel.app" }));

app.use("/shoe-trek/payment", paymentRouter);

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error);
  }
});
