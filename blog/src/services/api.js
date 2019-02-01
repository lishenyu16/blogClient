import axios from "axios"
export default ()=>{
    return axios.create({
        baseURL:'http://54.193.249.19:3000' // 
    })
} 