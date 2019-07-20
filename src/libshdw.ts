import axios from "axios";

export default (a: string, b: string) => +a + +b;



export const api = async (id: string) => {
  const {data} = await axios(`https://foo.bar.com/test?id=${id}`);
  return data;
};