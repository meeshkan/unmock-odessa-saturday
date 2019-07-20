import axios from "axios";

export default async () => {
    const { data } = await axios('https://lala.lala.lala/lala');
    return data;
}