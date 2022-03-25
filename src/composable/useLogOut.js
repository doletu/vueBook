import { signature } from "@/constraints/signature";
import { BASE_URL } from "@/constraints";
import axios from "axios";
const { generateSignature, generateHeader } = signature();
async function LogOut() {
  var url = BASE_URL + "logout";
  var timeStamp = new Date().toISOString();

  var signature = generateSignature(url, "GET", timeStamp);
  var headersData = generateHeader(signature, timeStamp);

  var response = await axios
    .get(url, {
      headers: headersData,
      mode: "cors",
    })
    .then((response) => {
      return response.status;
    })
    .catch((error) => {
      error.value = error.message;
    });
  return response;
}

export function useLogOut() {
  return { LogOut };
}
