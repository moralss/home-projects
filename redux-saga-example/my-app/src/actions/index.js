import axios from "axios";
const url = "http://localhost:3001/";

export const recieveApiData = data => {
  return { type: "RECIVED_MESSAGE", payload: data.data };
};

export const requestData = () => {
  return { type: "FETCH_MESSAGE" };
};

export const fetchData = async () => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (e) {
    console.log(e);
    return;
  }
};
