import express from "express";
const ApiRouter = express.Router();

function debug(req, res) {
    switch (req.method) {
      case "GET":
        console.log(req.query);
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

  
ApiRouter.route("/numbers").post(debug);

export default  ApiRouter ;