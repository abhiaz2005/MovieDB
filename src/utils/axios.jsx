import axios from "axios";

const instance = axios.create({
  baseURL: 'http://www.omdbapi.com/', 
  params:{
    apikey: 'eecaf9d7',  
  }
});

export default instance;
