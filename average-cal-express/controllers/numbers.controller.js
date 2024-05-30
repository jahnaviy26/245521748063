export const NumberHandler = async (req, res) => {
  const number_id = req.params.numberid;

  if (!number_id) {
    res.send({ msg: "please give the number id" });
  }

  switch (number_id) {
    case "p":
      break;
    case "f":
      break;
    case "e":
      break;
    case "r":
      break;
    default:
      res.send({ msg: "not vaild number id " });
  }

  res.send(number_id);
};
