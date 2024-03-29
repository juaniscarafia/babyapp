//import configService from ".config";
import axios from "axios";

const measureMilks = {};
let apiUrl = 'https://955a-190-136-198-28.ngrok-free.app'
// let apiUrl = 'http://localhost:3004'
// let apiUrl = 'https://port-3004-lucecitapp-juaniscarafia231893.codeanyapp.com'
// let apiUrl = 'https://apibabyapp.onrender.com'

measureMilks.search = async function() {
  return await axios.get(`${apiUrl}/api/measuremilks`)
    .then(res => res)
    .catch(error => error);
};

measureMilks.listMilks = async function() {
  return await axios.get(`${apiUrl}/api/measuremilks/milks`)
    .then(res => res)
    .catch(error => error);
};

measureMilks.insert = async function(data) {
  return await axios.post(`${apiUrl}/api/measuremilks/insertmeasure`,data)
    .then(res => res)
    .catch(error => error);
};

export default measureMilks;
