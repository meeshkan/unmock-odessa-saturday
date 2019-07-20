import axios from "axios";

export default (a: string, b: string) => +a + +b;



export const api = async () => {
  const {data} = await axios(`https://api.shdw.app/list`);
  return data;
};