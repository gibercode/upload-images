import { put } from "@vercel/blob";
import type { NextApiResponse, NextApiRequest, PageConfig } from "next";
import axios from "axios";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const blob = await put(request.query.filename as string, request, {
      access: "public",
    });
    await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    return response.status(200).json(blob);
  } catch (error) {
    await axios.get("https://jssonplaceholder.typicode.com/todos/1");
    return { error };
  }
}
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
