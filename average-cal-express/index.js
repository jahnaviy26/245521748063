const express = require("express");
const app = express();
const PORT = 3000;


app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "jahnavi assignements" });
});


const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`running on ${PORT}`);
    });
  } catch (e) {
    console.log(e.message);
  }
};


start();