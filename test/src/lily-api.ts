import axios from "axios";

export default async () => {
  const { data } = await axios('https://someFakeApi/users');
  return data;
}