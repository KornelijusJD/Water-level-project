import axios from 'axios';
export default axios.create({
  baseURL: 'https://waterlevel.ie/geojson/',
  headers: {
    //header1: value,
  },
});
