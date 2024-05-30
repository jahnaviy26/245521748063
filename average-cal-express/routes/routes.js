import express from "express";
import { NumberHandler } from "../controllers/numbers.controller.js";
const ApiRouter = express.Router();

function debug(req, res) {
  switch (req.method) {
    case "GET":
      res.send(req.params);
      break;
    case "POST":
      res.send(req.body);
      break;
    default:
      req.send("");
      break;
  }
}

ApiRouter.route("/numbers").post(NumberHandler);
ApiRouter.route("/numbers").get(debug);

export default ApiRouter;
