import axios from 'axios';
import { api } from './Urlconfig'


const axiosinstance = axios.create({
    baseURL: api,

})

export default axiosinstance;