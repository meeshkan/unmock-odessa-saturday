import axios from "axios";

export const fecthData = async () => {
    const { data } = await axios("https://slackfoo.com/users");
    return data
};