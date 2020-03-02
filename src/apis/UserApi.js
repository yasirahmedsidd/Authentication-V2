import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.100.15:5000/user',
});
