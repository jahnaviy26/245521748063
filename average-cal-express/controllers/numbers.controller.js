export const NumberHandler = async (req, res) => {
  const number_id = req.params.numberid;

  if (!number_id) {
    res.send({ msg: "please give the number id" });
  }

  res.send(number_id);
};
