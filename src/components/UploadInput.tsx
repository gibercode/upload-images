"use client";
import type { PutBlobResult } from "@vercel/blob";
import { useRef, ChangeEvent, useState } from "react";
import { Button } from "@radix-ui/themes";

export const UploadInput = () => {
  const [blob, setBlob] = useState(null);
  const hiddenFileInput: any = useRef();

  const handleUpload = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    console.log("🚀 ~ handleChange ~ event:", event.target.files);
  };

  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            if (!hiddenFileInput.current?.files) {
              throw new Error("No file selected");
            }

            const file = hiddenFileInput.current.files[0];
            const fileCopy = { ...file };

            const response = await fetch(`/api/upload?filename=${file?.name}`, {
              method: "POST",
              body: fileCopy,
            });

            console.log("🚀 ~ onSubmit={ ~ response:", response?.body);

            // const newBlob = (await response.json()) as any;
            // if (newBlob) setBlob(newBlob);
          } catch (err) {
            console.log("🚀 ~ onSubmit={ ~ err:", err);
          }
        }}
      >
        {/* <Button
          onClick={handleUpload}
          size="3"
          color="iris"
          style={{ cursor: "pointer" }}
        >
          Search images
        </Button> */}
        <input
          // onChange={handleChange}
          type="file"
          // style={{ display: "none" }}
          ref={hiddenFileInput}
          multiple
        />
        <Button
          size="3"
          color="iris"
          style={{ cursor: "pointer" }}
          type="submit"
        >
          {" "}
          Submit
        </Button>
      </form>
    </>
  );
};
