import express from "express";
const app = express();
const PORT = 9876;
import { getAuthToken } from "./auth.js";
import ApiRouter from "./routes/routes.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "jahnavi assignements" });
});

app.use("/api", ApiRouter);

const start = async () => {
  const accessToken = await getAuthToken();

  try {
    app.listen(PORT, () => {
      console.log(`running on ${PORT}`);
    });
  } catch (e) {
    console.log(e.message);
  }
};

start();
