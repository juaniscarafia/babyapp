//import configService from ".config";
import axios from "axios";

const measureMilks = {};

measureMilks.search = async function() {
  return await axios.get('https://port-3004-lucecitapp-juaniscarafia231893.codeanyapp.com/api/measuremilks')
    .then(res => res)
    .catch(error => error);
};

export default measureMilks;