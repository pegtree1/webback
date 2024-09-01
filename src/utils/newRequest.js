import axios from "axios";

const newRequest = axios.create({
    baseURL :"https://webback-ajgy.onrender.com",
    withCredentials:true,
})
 

export default newRequest