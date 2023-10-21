import baseUri from "../constants/urls";
import axios from 'axios';
const randomProducts = () => {
    axios.get(`${baseUri.hostExtend}products`, {
        auth: {
          username: baseUri.consumerKey,
          password: baseUri.consumerSecret,
        },
        headers: {
            Authorization: `Basic ${btoa(`${baseUri.consumerKey}:${baseUri.consumerSecret}`)}`,
            'Content-Type':'application/json'
          },
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
}

export default randomProducts