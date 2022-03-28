import { ref } from "vue";
import { signature } from "@/constraints/signature";
import { BASE_URL } from "@/constraints";
import axios from "axios";
const { generateSignature, generateHeader } = signature();

const error = ref(null);

async function Login(userName, password) {
  error.value = null;
  var timeStamp = new Date().toISOString();
  var url = BASE_URL + "login?userName=" + userName + "&password=" + password;
  var signature = generateSignature(url, "GET", timeStamp);
  var headersData = generateHeader(signature, timeStamp);
  var response = await axios
    .get(url, {
      headers: headersData,
      mode: "cors",
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      error.value = error;
    });
  return response;
}

export function userLogin() {
  return { error, Login };
}
