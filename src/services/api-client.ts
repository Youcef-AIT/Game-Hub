import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "99c14d2107224e9f8fbf9c9d265b7af7",
    },
});
