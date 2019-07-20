import axios from "axios";

export const fecthData = async () => {
    const { data } = await axios("https:getmesomedata.com/all");
    return data
};