//import configService from ".config";
import axios from "axios";

const login = {};

login.access = async function (data) {
  return await axios
    .post(
      "https://port-3004-lucecitapp-juaniscarafia231893.codeanyapp.com/api/login/",
      data
    )
    // return await axios.post('http://localhost:3004/api/login/',data)
    .then((res) => res)
    .catch((error) => error);
};

export default login;
