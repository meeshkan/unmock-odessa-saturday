import axios from "axios";

export default async () => {
    const { data } = await axios('https://api.github.com/hello');
    return data;
}
