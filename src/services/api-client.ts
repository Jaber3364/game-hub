import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
    key: "5772d834b92d48f3a1d9d49f5d537098",
  },
});