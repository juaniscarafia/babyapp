import axios from "axios";
import { useIsLoadingStore } from '@/stores/loading';

const measureMilks = {};

measureMilks.search = async function() {
  useIsLoadingStore().setTrue();
  // return await axios.get('http://localhost:3004/api/measuremilks')
  // return await axios.get('https://port-3004-lucecitapp-juaniscarafia231893.codeanyapp.com/api/measuremilks')
  // return await axios.get('https://apibabyapp.onrender.com/api/measuremilks')
  return await axios.get('https://b32d-190-244-83-15.sa.ngrok.io/api/measuremilks')
    .then(res => {
      useIsLoadingStore().setFalse();
      return res
    })
    .catch(error => error);
};

measureMilks.listMilks = async function() {
  useIsLoadingStore().setTrue();
  // return await axios.get('http://localhost:3004/api/measuremilks/milks')
  // return await axios.get('https://port-3004-lucecitapp-juaniscarafia231893.codeanyapp.com/api/measuremilks/milks')
  // return await axios.get('https://apibabyapp.onrender.com/api/measuremilks/milks')
  return await axios.get('https://b32d-190-244-83-15.sa.ngrok.io/api/measuremilks/milks')
    .then(res => {
      useIsLoadingStore().setFalse();
      return res
    })
    .catch(error => error);
};

measureMilks.insert = async function(data) {
  useIsLoadingStore().setTrue();
  // return await axios.post('http://localhost:3004/api/measuremilks/insertmeasure',data)
  // return await axios.post('https://port-3004-lucecitapp-juaniscarafia231893.codeanyapp.com/api/measuremilks/insertmeasure',data)
  // return await axios.post('https://apibabyapp.onrender.com/api/measuremilks/insertmeasure',data)
  return await axios.post('https://b32d-190-244-83-15.sa.ngrok.io/api/measuremilks/insertmeasure',data)
    .then(res => {
      useIsLoadingStore().setFalse();
      return res
    })
    .catch(error => error);
};

export default measureMilks;
