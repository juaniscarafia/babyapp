import axios from "axios";
import { useIsLoadingStore } from "@/stores/loading";

const measureMilks = {};

const urlLocal = "http://localhost:3004/api";
const urlOnRender = "https://apibabyapp.onrender.com/api";
const urlNGROK = "https://b32d-190-244-83-15.sa.ngrok.io/api";
const urlCode = "https://port-3004-lucecitapp-juaniscarafia231893.codeanyapp.com/api";

measureMilks.search = async function (token) {
  useIsLoadingStore().setTrue();
  return await axios
    .get(
      `${urlLocal}/measuremilks`,
      {
        headers: {
          "x-access-token": token,
        },
        params: {
          limit: 7,
          offset: 0,
        },
      }
    )
    .then((res) => {
      useIsLoadingStore().setFalse();
      return res;
    })
    .catch((error) => {
      return error.response.data;
    });
};

measureMilks.listMilks = async function (token) {
  useIsLoadingStore().setTrue();
  
  return await axios
    .get(
      `${urlLocal}/measuremilks/milks`,
      {
        headers: {
          "x-access-token": token,
        },
      }
    )
    .then((res) => {
      useIsLoadingStore().setFalse();
      return res;
    })
    .catch((error) => error);
};

measureMilks.insert = async function (token, data) {
  useIsLoadingStore().setTrue();
  
  return await axios
    .post(
      `${urlLocal}/measuremilks/insertmeasure`,
      data,
      {
        headers: {
          "x-access-token": token,
        },
      }
    )
    .then((res) => {
      useIsLoadingStore().setFalse();
      return res;
    })
    .catch((error) => error);
};

export default measureMilks;
