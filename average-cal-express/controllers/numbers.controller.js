import { getNumber } from "../utils/utils.js";


const get_array = async (key) =>{
    const array = await getNumber(key);
}


export const NumberHandler = async (req, res) => {
  const number_id = req.params.numberid;

  if (!number_id) {
    res.send({ msg: "please give the number id" });
  }
  
  let array ;
  switch (number_id) {
    case "p" | "f" | "e" | "r":
        array = await get_array(key,array)
      break;
    default:
      res.send({ msg: "not vaild number id " });
  }

  res.send(number_id);
};
