import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "5d42acf20a4445ed822052819e5992cd",
    },
});
