import { getAuthToken } from "../auth.js";
import { API_URL } from "./constant.js";

export function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

export const getNumber = async (key) => {
  let api_endpoint;
  switch (key) {
    case "p":
      api_endpoint = `${API_URL}/primes`;
      break;
    case "f":
      api_endpoint = `${API_URL}/fibo`;
      break;
    case "e":
      api_endpoint = `${API_URL}/even`;
      break;
    case "r":
      api_endpoint = `${API_URL}/rand`;
      break;
  }
  const req_auth = await getAuthToken();

  const accessToken = req_auth.access_token;

  const response = await axios.get(api_endpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    timeout: 500, 
  });

  console.log(response.data.numbers);
  return response.data.numbers;
};
