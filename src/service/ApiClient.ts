import axios from "axios";


export default axios.create({
  baseURL:"https://api.rawg.io/api/"
  ,params:{
    key:"b15ce85da7cd4589807a9a33b18edf03"
  }
})

