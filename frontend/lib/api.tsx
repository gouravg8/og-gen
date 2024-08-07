import axios from "axios";
import { cache } from "react";

export const getPost = cache(async (id: string) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/post/${id}`
  );
  return res.data;
});
