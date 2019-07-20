import axios from "axios";

export default async () => {
    const { data } = await axios('https://api.foo.bar/hello');
    return data;
}