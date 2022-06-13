import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID QIQ9SxduR22erwGDgq2im7vog6MXZXZRck5tgYcxU34",
  },
});
