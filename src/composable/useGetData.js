import { ref } from "vue";
import { signature } from "@/constraints/signature";
import { BASE_URL } from "@/constraints";
import axios from "axios";
const { generateSignature, generateHeader } = signature();

const error = ref(null);

async function GetData() {
  error.value = null;
  var timeStamp = new Date().toISOString();
  var url = BASE_URL + "classes/StoreData/";
  var signature = generateSignature(url, "GET", timeStamp);

  var headersData = generateHeader(signature, timeStamp);

  var data = await axios
    .get(url, {
      headers: headersData,
      mode: "cors",
    })
    .then((response) => {
      return response.data["results"];
    })
    .catch((error) => {
      error.value = error.message;
    });
  return data;
}

async function SearchData(value) {
  error.value = null;
  var timeStamp = new Date().toISOString();
  var url =
    BASE_URL +
    "classes/StoreData/" +
    '?where={"title' +
    '":{"$regex":"' +
    value +
    '"}}';
  var signature = generateSignature(url, "GET", timeStamp);

  var headersData = generateHeader(signature, timeStamp);

  var data = await axios
    .get(url, {
      headers: headersData,
      mode: "cors",
    })
    .then((response) => {
      return response.data["results"];
    })
    .catch((error) => {
      error.value = error.message;
    });
  return data;
}

export function useGetData() {
  return { GetData, SearchData, error };
}

// import { useGetData } from "@/composable/useGetData";
// const { GetData } = useGetData();
