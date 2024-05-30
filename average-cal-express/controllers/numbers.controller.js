import { calculateAverage, getNumber } from "../utils/utils.js";

const get_array = async (key) => {
  const array_of_key = await getNumber(key);
  return array
};

export const NumberHandler = async (req, res) => {
  const number_id = req.params.numberid;

  if (!number_id) {
    res.send({ msg: "please give the number id" });
  }

  let array;
  switch (number_id) {
    case "p" | "f" | "e" | "r":
      array = await get_array(key, array);
      break;
    default:
      res.send({ msg: "not vaild number id " });
  }



  switch (number_id) {
    case "p":
      array = await get_array(key, array);
      res.send({
        windowPrevState: [],
        windowCurrState: array,
        numbers: array,
        avg: calculateAverage(array),
      });
      break;
    case "f":
      array = await get_array(key, array);
      res.send({
        numbers: array,
      });
      break;
    case "e":
      array = await get_array(key, array);
      res.send({
        numbers: array,
      });
      break;
    case "r":
      array = await get_array(key, array);
      res.send({
        numbers: array,
      });
      break;
    default:
      res.send({ msg: "not vaild number id " });
  }
}
