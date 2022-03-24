import { ref } from "vue";
import { signature } from "@/constraints/signature";
import { BASE_URL } from "@/constraints";
import axios from "axios";
const { generateSignature, generateHeader } = signature();

const error = ref(null);

async function GetData() {
  error.value = null;
  var timeStamp = new Date().toISOString();
  var url = BASE_URL + "classes/StoreData";
  var signature = generateSignature(url, "GET", timeStamp);
  console.log(signature);
  var headersData = generateHeader(signature, timeStamp);
  console.log(headersData);
  await axios
    .get(url, {
      headers: headersData,
      mode: "cors",
    })
    .then((response) => {
      const code = response.status;
      if (code == 200 || code == 201) {
        return response;
      }
    })
    .catch((error) => {
      if (error.response) {
        error.value = error;
      }
    });
}
export function useGetData() {
  return { GetData, error };
}

// import { useGetData } from "@/composable/useGetData";
// const { GetData } = useGetData();
