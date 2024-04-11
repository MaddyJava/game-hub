import axios from "axios";

export default axios.create(
   {
    baseURL:'https://api.rawg.io/api'
    ,
    params:{
        key:'95c98dc2856149cc841dcddfcc856472'
    }
   }
);