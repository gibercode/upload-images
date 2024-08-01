import type { PutBlobResult } from "@vercel/blob";
import { useRef, useState } from "react";
import { Button } from "@radix-ui/themes";
import { useFileStore } from "@/stores/files";
import { Toast } from "./Toast";

export const Form = () => {
  const [error, setError] = useState({ show: false, message: "" });
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);
  const { setData } = useFileStore();
  const maxSize = 5;

  const handleShowError = (message: string) => {
    setError({
      show: true,
      message: message,
    });

    setTimeout(() => {
      setError({
        show: false,
        message: "",
      });
    }, 3000);
  };

  return (
    <>
      {error?.show && <Toast message={error?.message} />}
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            if (!hiddenFileInput.current?.files) {
              throw new Error("No file selected");
            }

            const file = hiddenFileInput.current.files[0];

            if (file?.size > maxSize) {
              return handleShowError(
                "The file is larger than 5 MB, please upload a smaller file"
              );
            }

            const response = await fetch(`api/upload?filename=${file?.name}`, {
              method: "POST",
              body: file,
            });

            const newBlob = (await response.json()) as PutBlobResult;
            if (newBlob) setData([newBlob]);
          } catch (err) {
            console.log("🚀 ~ onSubmit={ ~ err:", err);
          }
        }}
      >
        <input type="file" ref={hiddenFileInput} multiple />
        <Button
          size="3"
          color="iris"
          style={{ cursor: "pointer" }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
};
