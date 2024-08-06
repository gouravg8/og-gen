import axios from "axios";
import { cache } from "react";

export const getPost = cache(async (id: string) => {
  const res = await axios.get(`http://localhost:3001/api/post/${id}`);
  return res.data;
});
