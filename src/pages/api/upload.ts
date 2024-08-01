import { NextApiRequest, NextApiResponse } from "next";
import { PutBlobResult } from "@vercel/blob";

const upload = async (req: NextApiRequest, res: NextApiResponse) => {
  const file = req.body;
  const filename = req.query.filename;

  const response = await fetch(
    `https://api.vercel.com/v9/projects/${process.env.VERCEL_PROJECT_ID}/blob`,
    {
      method: "PUT",
      headers: {
        "Content-Type": file.type,
        Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
      },
      body: file,
    }
  );

  const newBlob: PutBlobResult = await response.json();

  res.status(201).json(newBlob);
};

export default upload;
