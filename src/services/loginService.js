//import configService from ".config";
import axios from "axios";

const login = {};
const urlLocal = "http://localhost:3004/api";
const urlOnRender = "https://apibabyapp.onrender.com/api";
const urlNGROK = "https://b32d-190-244-83-15.sa.ngrok.io/api";
const urlCode = "https://port-3004-lucecitapp-juaniscarafia231893.codeanyapp.com/api";

login.access = async function (data) {
  return await axios
    .post(
      `${urlLocal}/login/`,
      data
    )
    // return await axios.post('http://localhost:3004/api/login/',data)
    .then((res) => res)
    .catch((error) => error);
};

export default login;
